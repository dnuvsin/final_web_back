-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 25, 2023 at 10:18 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tour`
--

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `name` varchar(200) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `email` varchar(200) NOT NULL,
  `message` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `date`, `name`, `phone`, `email`, `message`) VALUES
(1, '2023-03-25', 'undefined', 'undefined', 'undefined', 'undefined'),
(2, '2023-03-25', 'Dnuvsin Limna', '0909209496', 'dnuvsin1720132@gmail.com', 'ติดต่อทัวร์'),
(3, '2023-03-25', 'undefined', 'undefined', 'undefined', 'undefined'),
(4, '2023-03-25', 'undefined', 'undefined', 'undefined', 'undefined'),
(5, '2023-03-25', 'undefined', 'undefined', 'undefined', 'undefined'),
(6, '2023-03-25', 'dnu lim', '09876422', '1@gmail.com', 'จอววืะ่ืด'),
(7, '2023-03-25', 'undefined', 'undefined', 'undefined', 'undefined'),
(8, '2023-03-25', 'undefined', 'undefined', 'undefined', 'undefined'),
(9, '2023-03-25', 'John Doe', '1234567890', 'johndoe@example.com', 'Hello, World!'),
(10, '2023-03-25', 'Dnuvsin Limna', '0909209496', 'dnuvsin1720132@gmail.com', 'DNudnu');

-- --------------------------------------------------------

--
-- Table structure for table `photos`
--

CREATE TABLE `photos` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image_url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `photos`
--

INSERT INTO `photos` (`id`, `title`, `description`, `image_url`) VALUES
(1, 'โปรแกรมทัวร์ 4 เกาะ ทะเลแหวก เรือหางยาว', 'ทัวร์กระบี่วันเดียวเที่ยว 4 เกาะ เที่ยวทะเลแหวก เกาะปอดะ เกาะไก่ ถ้ำพระนาง หาดไร่เลย์', 'https://www.pmandamantour.com/uploads/package/pictures/pic-602139717683.jpg'),
(2, 'โปรแกรมทัวร์ สระมรกต น้ำตกร้อน วัดถ้ำเสือ', 'เที่ยวเมืองกระบี่ แช่น้ำตกร้อน เล่นน้ำที่สระมรกต แวะวัดถ้ำเสือ', 'https://www.krabiteerapongtour.com/uploads/package/album/pic-361246118608.jpg'),
(3, 'ทัวร์พายเรือคายัค อ่าวท่าเลน ครึ่งวัน กระบี่', 'ทัวร์กระบี่ พายเรือแคนู/คายัคครึ่งวัน ชมความงามของธรรมชาติ ทะเล ภูเขาหินปูนและป่าชายเลนที่อุดมสมบูรณ์', 'https://www.krabiteerapongtour.com/uploads/package/album/pic-622701866895.jpg'),
(4, 'Photo 4', 'Description 3', 'https://www.kkday.com/en/blog/wp-content/uploads/Krabi-Guide-Banner-1170x680.jpg'),
(5, 'Photo 5', 'Description 3', 'https://www.kkday.com/en/blog/wp-content/uploads/th_krabi_town.jpg'),
(6, 'Photo 6', 'Description 3', 'https://www.kkday.com/en/blog/wp-content/uploads/th_ruen_mai_restaurant_krabi.jpg'),
(7, 'Photo 7', 'Description 3', 'https://www.kkday.com/en/blog/wp-content/uploads/th_jennas_fine_bistro_and_wine_ao_nang_krabi.jpg'),
(8, 'ทัวร์ 4 เกาะทะเลแหวก สปีดโบ๊ท', 'หาดไร่เลย์, หาดถ้ำพระนาง, เกาะไก่, ทะเลแหวก\r\nราคาต่อคน\r\n - ผู้ใหญ่ 800 บาทต่อคน\r\n - เด็ก 700 บาทต่อคน\r\n     *ฟรีสำหรับเด็กอายุต่ำกว่า 4 ปี', 'https://a.cdn-hotels.com/gdcs/production82/d183/f8382092-5689-463d-b693-42331d2eaa66.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`) VALUES
(36, 'dnu', 'lim', 'dnu@gmail.com', 'dnudnu'),
(37, 'lim', 'dnu', 'dnudnu@gmail.com', 'fnufnu'),
(38, 'lim', 'dnu', 'dnudnu@gmail.com', 'fnufnu'),
(43, 'limma', 'dnuvsib', 'dnu12@gmail.com', 'dnudnu'),
(44, 'limma', 'dnuvsib', 'dnu12@gmail.com', 'dnudnu'),
(45, 'limma', 'dnuvsib', 'dnu12@gmail.com', 'dnudnu');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `photos`
--
ALTER TABLE `photos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
