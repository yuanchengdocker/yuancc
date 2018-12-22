/*创建菜品表*/
CREATE TABLE `food_menu` (
  `id` varchar(30) NOT NULL,
  `name` varchar(100) NOT NULL,
  `img_url` varchar(200) DEFAULT NULL,
  `desc` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=`utf8`;

