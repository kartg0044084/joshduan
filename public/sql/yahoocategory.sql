-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- 主機: 127.0.0.1
-- 產生時間： 2019-02-23 06:46:44
-- 伺服器版本: 10.1.25-MariaDB
-- PHP 版本： 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `joshduan`
--

-- --------------------------------------------------------

--
-- 資料表結構 `yahoocategory`
--

CREATE TABLE `yahoocategory` (
  `Cate_id` int(11) NOT NULL,
  `Category1` varchar(40) CHARACTER SET utf8mb4 NOT NULL,
  `Category2` varchar(40) CHARACTER SET utf8mb4 NOT NULL,
  `Category3` varchar(40) CHARACTER SET utf8mb4 NOT NULL,
  `Code` varchar(20) CHARACTER SET utf8mb4 NOT NULL,
  `Url` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  `MappingId` int(11) NOT NULL,
  `MappingId2` int(11) NOT NULL,
  `Category_Type` int(11) NOT NULL,
  `LastModified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 資料表的匯出資料 `yahoocategory`
--

INSERT INTO `yahoocategory` (`Cate_id`, `Category1`, `Category2`, `Category3`, `Code`, `Url`, `MappingId`, `MappingId2`, `Category_Type`, `LastModified`) VALUES
(1, '智能家居', '', '', '28629952', 'https://tw.buy.yahoo.com/category/28629952', 0, 0, 1, '2019-02-23 12:28:40'),
(2, '電視', '', '', '4387247', 'https://tw.buy.yahoo.com/category/4387247', 0, 0, 1, '2019-02-23 12:28:40'),
(3, '投影機', '', '', '31044953', 'https://tw.buy.yahoo.com/category/31044953', 0, 0, 1, '2019-02-23 12:28:40'),
(4, '廚房家電', '', '', '4387517', 'https://tw.buy.yahoo.com/category/4387517', 0, 0, 1, '2019-02-23 12:28:40'),
(5, '生活家電', '', '', '4387562', 'https://tw.buy.yahoo.com/category/4387562', 0, 0, 1, '2019-02-23 12:28:40'),
(6, '除濕清淨', '', '', '26809962', 'https://tw.buy.yahoo.com/category/26809962', 0, 0, 1, '2019-02-23 12:28:40'),
(7, '美容家電', '', '', '4387578', 'https://tw.buy.yahoo.com/category/4387578', 0, 0, 1, '2019-02-23 12:28:40'),
(8, '按摩家電', '', '', '31046223', 'https://tw.buy.yahoo.com/category/31046223', 0, 0, 1, '2019-02-23 12:28:40'),
(9, '筆電', '', '', '4385994', 'https://tw.buy.yahoo.com/category/4385994', 0, 0, 1, '2019-02-23 12:28:40'),
(10, '手錶/時鐘', '', '', '4483172', 'https://tw.buy.yahoo.com/category/4483172', 0, 0, 1, '2019-02-23 12:28:40'),
(11, '旅遊小物', '', '', '31406928', 'https://tw.buy.yahoo.com/category/31406928', 0, 0, 1, '2019-02-23 12:28:40'),
(12, '防搶專區', '', '', '31406927', 'https://tw.buy.yahoo.com/category/31406927', 0, 0, 1, '2019-02-23 12:28:40'),
(13, '旅行袋', '', '', '31406926', 'https://tw.buy.yahoo.com/category/31406926', 0, 0, 1, '2019-02-23 12:28:40'),
(14, '頸枕眼罩', '', '', '31406925', 'https://tw.buy.yahoo.com/category/31406925', 0, 0, 1, '2019-02-23 12:28:40'),
(15, '護照套', '', '', '31406924', 'https://tw.buy.yahoo.com/category/31406924', 0, 0, 1, '2019-02-23 12:28:40'),
(16, '收納分裝', '', '', '31406923', 'https://tw.buy.yahoo.com/category/31406923', 0, 0, 1, '2019-02-23 12:28:40'),
(17, '化妝盥洗包', '', '', '31406922', 'https://tw.buy.yahoo.com/category/31406922', 0, 0, 1, '2019-02-23 12:28:40'),
(18, '纖體/美顏', '', '', '4385872', 'https://tw.buy.yahoo.com/category/4385872', 0, 0, 1, '2019-02-23 12:28:40'),
(19, '兒童用品', '', '', '4385885', 'https://tw.buy.yahoo.com/category/4385885', 0, 0, 1, '2019-02-23 12:28:40');

--
-- 已匯出資料表的索引
--

--
-- 資料表索引 `yahoocategory`
--
ALTER TABLE `yahoocategory`
  ADD PRIMARY KEY (`Cate_id`);

--
-- 在匯出的資料表使用 AUTO_INCREMENT
--

--
-- 使用資料表 AUTO_INCREMENT `yahoocategory`
--
ALTER TABLE `yahoocategory`
  MODIFY `Cate_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
