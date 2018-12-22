/*创建菜品表*/
CREATE TABLE `food_menu` (
  `id` varchar(30) NOT NULL,
  `name` varchar(50) NOT NULL,
  `img_url` varchar(50) DEFAULT NULL,
  `desc` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

