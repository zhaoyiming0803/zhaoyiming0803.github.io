#!/usr/bin/env python3
import os
import re

BASE_DIR = "/Users/zhaoyiming/Desktop/github/zhaoyiming0803.github.io"
HOST = "https://zhaoyiming0803.github.io"

# All pages with their simplified titles
pages = [
    {
        "filename": "aer-lingus-baggage-allowance-2026.html",
        "title": "Aer Lingus Baggage Allowance 2026"
    },
    {
        "filename": "air-peace-baggage-allowance-2026.html",
        "title": "Air Peace Baggage Allowance 2026"
    },
    {
        "filename": "easyjet-baggage-allowance-2026.html",
        "title": "easyJet Baggage Allowance 2026"
    },
    {
        "filename": "eu-100cm-7kg-carry-on-rule-explained.html",
        "title": "EU 100cm 7kg Carry-on Rule Explained"
    },
    {
        "filename": "eu-free-cabin-bag-rules-2027.html",
        "title": "EU Free Cabin Bag Rules 2027"
    },
    {
        "filename": "japan-airlines-baggage-allowance-2026.html",
        "title": "Japan Airlines Baggage Allowance 2026"
    },
    {
        "filename": "lufthansa-baggage-allowance-2026.html",
        "title": "Lufthansa Baggage Allowance 2026"
    },
    {
        "filename": "qatar-airways-baggage-allowance-2026.html",
        "title": "Qatar Airways Baggage Allowance 2026"
    },
    {
        "filename": "ryanair-baggage-allowance-2026.html",
        "title": "Ryanair Baggage Allowance 2026"
    },
    {
        "filename": "ryanair-eu-2027-baggage-rules.html",
        "title": "Ryanair EU 2027 Baggage Rules"
    },
    {
        "filename": "will-ryanair-carry-on-be-free-2027.html",
        "title": "Will Ryanair Carry-on Be Free in 2027?"
    },
    {
        "filename": "wizz-air-baggage-allowance-2026.html",
        "title": "Wizz Air Baggage Allowance 2026"
    }
]

# CSS for related pages
related_pages_css = """
/* Related Pages */
.related-pages {
  margin-top: 40px;
  padding-top: 24px;
  border-top: 1px solid #e2e8f0;
}
.related-pages h3 {
  font-size: 18px;
  margin-bottom: 16px;
  color: #1e293b;
}
.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
}
.related-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 14px 16px;
  transition: all 0.2s;
  text-decoration: none;
  display: block;
}
.related-card:hover {
  border-color: #9333ea;
  background: #faf5ff;
  text-decoration: none;
}
.related-card .related-title {
  font-size: 14px;
  font-weight: 600;
  color: #1e293b;
  line-height: 1.4;
}
.related-card:hover .related-title {
  color: #9333ea;
}
"""

def generate_related_html(current_filename):
    """Generate related pages HTML for a given page (excluding itself)"""
    related_pages = [p for p in pages if p["filename"] != current_filename]
    
    html = '    <div class="related-pages">\n'
    html += '      <h3>Related Pages</h3>\n'
    html += '      <div class="related-grid">\n'
    
    for page in related_pages:
        url = f"{HOST}/{page['filename']}"
        html += f'        <a href="{url}" class="related-card">\n'
        html += f'          <div class="related-title">{page["title"]}</div>\n'
        html += f'        </a>\n'
    
    html += '      </div>\n'
    html += '    </div>\n'
    
    return html

def process_file(filepath):
    """Process a single HTML file: add CSS and related pages"""
    filename = os.path.basename(filepath)
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if already has related-pages CSS
    if '.related-pages {' in content:
        print(f"  Skipping CSS (already exists): {filename}")
    else:
        # Add CSS before </style>
        # Find the last </style> in the head section
        style_end = content.find('</style>')
        if style_end != -1:
            content = content[:style_end] + related_pages_css + '\n' + content[style_end:]
            print(f"  Added CSS: {filename}")
        else:
            print(f"  WARNING: No </style> found in {filename}")
            return False
    
    # Check if already has related-pages div
    if 'class="related-pages"' in content:
        print(f"  Skipping HTML (already exists): {filename}")
        return True
    
    # Insert related pages before <div class="sources">
    sources_div = '<div class="sources">'
    sources_pos = content.find(sources_div)
    
    if sources_pos != -1:
        related_html = generate_related_html(filename)
        content = content[:sources_pos] + related_html + '\n    ' + content[sources_pos:]
        print(f"  Added related pages: {filename}")
    else:
        print(f"  WARNING: No .sources div found in {filename}")
        return False
    
    # Write back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    return True

def main():
    print(f"Processing {len(pages)} HTML files...")
    print(f"Base URL: {HOST}")
    print()
    
    success_count = 0
    for page in pages:
        filepath = os.path.join(BASE_DIR, page["filename"])
        if os.path.exists(filepath):
            print(f"Processing: {page['filename']}")
            if process_file(filepath):
                success_count += 1
        else:
            print(f"  File not found: {page['filename']}")
        print()
    
    print(f"Done! Processed {success_count}/{len(pages)} files successfully.")

if __name__ == "__main__":
    main()
