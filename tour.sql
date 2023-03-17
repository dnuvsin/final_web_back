-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 17, 2023 at 08:44 AM
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
(1, 'railay', 'Description 1', 'https://a.cdn-hotels.com/gdcs/production82/d183/f8382092-5689-463d-b693-42331d2eaa66.jpg'),
(2, 'Photo 2', 'Description 2', 'https://content.r9cdn.net/rimg/dimg/d7/d3/e9304e90-city-44862-164ae46b3a9.jpg'),
(3, 'Photo 3', 'Description 3', 'https://img.theculturetrip.com/wp-content/uploads/2021/06/t79cf1-1.jpg'),
(4, 'Photo 4', 'Description 3', 'https://www.kkday.com/en/blog/wp-content/uploads/Krabi-Guide-Banner-1170x680.jpg'),
(5, 'Photo 5', 'Description 3', 'https://www.kkday.com/en/blog/wp-content/uploads/th_krabi_town.jpg'),
(6, 'Photo 6', 'Description 3', 'https://www.kkday.com/en/blog/wp-content/uploads/th_ruen_mai_restaurant_krabi.jpg'),
(7, 'Photo 7', 'Description 3', 'https://www.kkday.com/en/blog/wp-content/uploads/th_jennas_fine_bistro_and_wine_ao_nang_krabi.jpg');

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
(10, 'DNuvsin', 'linjosbio', 'dnu188@gmail.com', '111111'),
(11, 'dnuvsin', 'limna', 'dnuvsin91999@gmail.com', '999'),
(12, 'dnuvsin', 'limna', 'dnuvsin91999@gmail.com', '999'),
(13, 'dnuvsin', 'limna', 'dnuvsin91999@gmail.com', '999'),
(14, 'dnuvsin', 'limna', 'dnuvsin91999@gmail.com', '999'),
(15, 'dnuvsin', 'limna', 'dnuvsin91999@gmail.com', '999'),
(16, 'dnuvsin', 'limna', 'dnuvsin91999@gmail.com', '999');

--
-- Indexes for dumped tables
--

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
-- AUTO_INCREMENT for table `photos`
--
ALTER TABLE `photos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
