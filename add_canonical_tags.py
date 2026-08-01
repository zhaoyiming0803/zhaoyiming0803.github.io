#!/usr/bin/env python3
import os

BASE_DIR = "/Users/zhaoyiming/Desktop/github/zhaoyiming0803.github.io"
HOST = "https://zhaoyiming0803.github.io"

def add_canonical_tag(filepath):
    """Add canonical link tag to an HTML file"""
    filename = os.path.basename(filepath)
    
    # Skip Google verification pages
    if 'google' in filename.lower():
        print(f"  Skipping (Google page): {filename}")
        return False
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if already has canonical tag
    if 'rel="canonical"' in content or "rel='canonical'" in content:
        print(f"  Skipping (already has canonical): {filename}")
        return True
    
    # Determine canonical URL
    if filename == 'index.html':
        canonical_url = f"{HOST}/"
    else:
        canonical_url = f"{HOST}/{filename}"
    
    canonical_tag = f'  <link rel="canonical" href="{canonical_url}">\n'
    
    # Insert after the meta description tag
    # Find the position after </title> or meta description
    desc_pos = content.find('<meta name="description"')
    if desc_pos != -1:
        # Find the end of this meta tag
        end_of_desc = content.find('>', desc_pos)
        if end_of_desc != -1:
            insert_pos = end_of_desc + 1
            content = content[:insert_pos] + '\n' + canonical_tag + content[insert_pos:]
            print(f"  Added canonical: {filename}")
        else:
            print(f"  WARNING: Could not find end of meta description in {filename}")
            return False
    else:
        # Fallback: insert after </title>
        title_end = content.find('</title>')
        if title_end != -1:
            insert_pos = title_end + len('</title>')
            content = content[:insert_pos] + '\n' + canonical_tag + content[insert_pos:]
            print(f"  Added canonical (after title): {filename}")
        else:
            print(f"  WARNING: No meta description or title found in {filename}")
            return False
    
    # Write back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    return True

def main():
    print(f"Adding canonical tags to HTML files in {BASE_DIR}")
    print(f"Host: {HOST}")
    print()
    
    # Get all HTML files
    html_files = [f for f in os.listdir(BASE_DIR) if f.endswith('.html')]
    html_files.sort()
    
    success_count = 0
    for filename in html_files:
        filepath = os.path.join(BASE_DIR, filename)
        print(f"Processing: {filename}")
        if add_canonical_tag(filepath):
            success_count += 1
        print()
    
    print(f"Done! Processed {success_count}/{len(html_files)} files.")

if __name__ == "__main__":
    main()
