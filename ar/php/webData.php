<?php

	header('Content-type:text/html;charset="utf-8"');

	$arry = array(
		array('webname'=>'赵一鸣个人技术', 'weburl'=>'https://zhaoyiming0803.com'),
		array('webname'=>'太原雅辉装修网', 'weburl'=>'http://www.0351zhuangxiu.com')
	);

	echo json_encode($arry);