-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2021-01-12 08:07:08
-- 服务器版本： 5.7.26
-- PHP 版本： 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `miuserlist`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL COMMENT '商品id',
  `title` varchar(255) NOT NULL COMMENT '商品标题',
  `price` float NOT NULL COMMENT '商品价格',
  `num` int(11) NOT NULL COMMENT '商品数量',
  `picture` varchar(255) NOT NULL COMMENT '商品图片',
  `details` text NOT NULL COMMENT '商品详情'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `title`, `price`, `num`, `picture`, `details`) VALUES
(2, 'Note 9 Pro1', 1599, 33, '[{\"src\":\"../img/phone2.webp\"}]', '一亿像素夜景相机，120Hz六档变速高刷屏'),
(3, 'Note 9', 1299, 33, '[{\"src\":\"../img/phone3.webp\"}]', '天玑 800U处理器，5000mAh电池'),
(4, 'Note 9 4G', 999, 33, '[{\"src\":\"../img/phone4.webp\"}]', '6000mAh长续航'),
(5, '小米10 至尊版', 5299, 33, '[{\"src\":\"../img/phone5.webp\"}]', '120X 变焦/120W秒充/120Hz屏幕'),
(6, 'Redmi K30S 至尊纪念版', 2599, 33, '[{\"src\":\"../img/phone6.webp\"}]', '144Hz[7档]变速高刷屏'),
(7, 'Redmi K30 至尊版', 1999, 33, '[{\"src\":\"../img/phone7.webp\"}]', '120Hz弹出全面屏，天玑1000+旗舰处理器'),
(8, '腾讯黑鲨3S', 3999, 33, '[{\"src\":\"../img/phone8.webp\"}]', '骁龙865处理器，120Hz刷新率'),
(1, '小米11', 3999, 22, '[{\"src\":\"../img/phone1.webp\"}]', '这里是小米手机');

-- --------------------------------------------------------

--
-- 表的结构 `userlist`
--

CREATE TABLE `userlist` (
  `id` int(12) NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `age` int(20) NOT NULL,
  `phonenumber` bigint(20) NOT NULL,
  `sex` bigint(1) NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转储表的索引
--

--
-- 表的索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `userlist`
--
ALTER TABLE `userlist`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品id', AUTO_INCREMENT=9;

--
-- 使用表AUTO_INCREMENT `userlist`
--
ALTER TABLE `userlist`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
