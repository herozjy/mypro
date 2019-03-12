/*
Navicat MySQL Data Transfer

Source Server         : my
Source Server Version : 50723
Source Host           : localhost:3306
Source Database       : myjd

Target Server Type    : MYSQL
Target Server Version : 50723
File Encoding         : 65001

Date: 2018-12-26 01:21:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `addressinfo`
-- ----------------------------
DROP TABLE IF EXISTS `addressinfo`;
CREATE TABLE `addressinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `userName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of addressinfo
-- ----------------------------
INSERT INTO `addressinfo` VALUES ('5', '张三', '湖里万达', '12345678901', '11@qq.com', '张三');
INSERT INTO `addressinfo` VALUES ('6', '张小三', '  湖里殿前3', '12345852632', '', '张三');
INSERT INTO `addressinfo` VALUES ('7', '张思', '   爱上223', '11111111111', '', '张三');
INSERT INTO `addressinfo` VALUES ('48', '张八', '阿斯', '15268598563', '', '张三');

-- ----------------------------
-- Table structure for `orderinfo`
-- ----------------------------
DROP TABLE IF EXISTS `orderinfo`;
CREATE TABLE `orderinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `userName` varchar(255) DEFAULT NULL,
  `orderId` int(11) DEFAULT NULL,
  `identifier` int(11) DEFAULT NULL,
  `ordertime` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orderinfo
-- ----------------------------
INSERT INTO `orderinfo` VALUES ('3', null, '张思', '张三', '1545750862', '1545743440', '2018-12-25 03:14:22');
INSERT INTO `orderinfo` VALUES ('4', null, '张思', '张三', '1545750960', '1545743440', '2018-12-25 03:16:00');
INSERT INTO `orderinfo` VALUES ('5', null, '张小三', '张三', '1545754970', '1545754964', '2018-12-25 04:22:50');
INSERT INTO `orderinfo` VALUES ('6', null, '张小三', '张三', '1545756731', '1545756729', '2018-12-25 04:52:11');
INSERT INTO `orderinfo` VALUES ('7', null, '张思', '张三', '1545756822', '1545756818', '2018-12-25 04:53:42');
INSERT INTO `orderinfo` VALUES ('8', null, '张三', '张三', '1545758191', '1545758189', '2018-12-25 05:16:31');
INSERT INTO `orderinfo` VALUES ('9', null, '张三', '张三', '1545758217', '1545758189', '2018-12-25 05:16:57');
INSERT INTO `orderinfo` VALUES ('10', null, '张三', '张三', '1545758226', '1545758189', '2018-12-25 05:17:06');
INSERT INTO `orderinfo` VALUES ('11', null, '张三', '张三', '1545758370', '1545758368', '2018-12-25 05:19:30');
INSERT INTO `orderinfo` VALUES ('12', null, '张三', '张三', '1545758432', '1545758407', '2018-12-25 05:20:32');

-- ----------------------------
-- Table structure for `submit_shopinfo`
-- ----------------------------
DROP TABLE IF EXISTS `submit_shopinfo`;
CREATE TABLE `submit_shopinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `href` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `shopInfo` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `num` varchar(255) DEFAULT NULL,
  `identifier` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of submit_shopinfo
-- ----------------------------
INSERT INTO `submit_shopinfo` VALUES ('1', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/index_copy1.html', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/img/5a582cbfNa68fe9e7.jpg', '联想ThinkPad 翼480 英特尔8代酷睿14英寸轻薄窄边框笔记本电脑（i5-8250U 8G 256GSSD 2G独显 FHD IPS屏）银', '5499元', '1', '1545745299');
INSERT INTO `submit_shopinfo` VALUES ('2', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/index.html', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/img/img1_54.jpg', '威龙远航 酷睿i5/8GDDR3/GTX1060 吃鸡游戏组装电脑主机台式机DIY家用办公组装机 配置三（酷睿i5+8G+GTX950）', '2699元', '2', '1545745299');
INSERT INTO `submit_shopinfo` VALUES ('3', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/index_copy1.html', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/img/5a582cbfNa68fe9e7.jpg', '联想ThinkPad 翼480 英特尔8代酷睿14英寸轻薄窄边框笔记本电脑（i5-8250U 8G 256GSSD 2G独显 FHD IPS屏）银', '5499元', '1', '1545754964');
INSERT INTO `submit_shopinfo` VALUES ('4', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/index.html', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/img/img1_54.jpg', '威龙远航 酷睿i5/8GDDR3/GTX1060 吃鸡游戏组装电脑主机台式机DIY家用办公组装机 配置三（酷睿i5+8G+GTX950）', '2699元', '3', '1545754964');
INSERT INTO `submit_shopinfo` VALUES ('5', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/index_copy1.html', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/img/5a582cbfNa68fe9e7.jpg', '联想ThinkPad 翼480 英特尔8代酷睿14英寸轻薄窄边框笔记本电脑（i5-8250U 8G 256GSSD 2G独显 FHD IPS屏）银', '5499元', '1', '1545756729');
INSERT INTO `submit_shopinfo` VALUES ('6', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/index.html', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/img/img1_54.jpg', '威龙远航 酷睿i5/8GDDR3/GTX1060 吃鸡游戏组装电脑主机台式机DIY家用办公组装机 配置三（酷睿i5+8G+GTX950）', '2699元', '3', '1545756729');
INSERT INTO `submit_shopinfo` VALUES ('7', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/index_copy2.html', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/img/lenovo_sm.jpg', '联想（Lenovo）天逸510S商用台式办公电脑整机（i3-7100 4G1T 集显 WiFi 蓝牙 三年上门 win10）21.5英寸', '3599元', '1', '1545756729');
INSERT INTO `submit_shopinfo` VALUES ('8', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/index_copy1.html', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/img/5a582cbfNa68fe9e7.jpg', '联想ThinkPad 翼480 英特尔8代酷睿14英寸轻薄窄边框笔记本电脑（i5-8250U 8G 256GSSD 2G独显 FHD IPS屏）银', '5499元', '1', '1545756818');
INSERT INTO `submit_shopinfo` VALUES ('9', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/index.html', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/img/img1_54.jpg', '威龙远航 酷睿i5/8GDDR3/GTX1060 吃鸡游戏组装电脑主机台式机DIY家用办公组装机 配置三（酷睿i5+8G+GTX950）', '2699元', '3', '1545756818');
INSERT INTO `submit_shopinfo` VALUES ('10', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/index_copy2.html', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/img/lenovo_sm.jpg', '联想（Lenovo）天逸510S商用台式办公电脑整机（i3-7100 4G1T 集显 WiFi 蓝牙 三年上门 win10）21.5英寸', '3599元', '2', '1545756818');
INSERT INTO `submit_shopinfo` VALUES ('11', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/index.html', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/img/img1_54.jpg', '威龙远航 酷睿i5/8GDDR3/GTX1060 吃鸡游戏组装电脑主机台式机DIY家用办公组装机 配置三（酷睿i5+8G+GTX950）', '2699元', '3', '1545758189');
INSERT INTO `submit_shopinfo` VALUES ('12', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/index_copy2.html', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/img/lenovo_sm.jpg', '联想（Lenovo）天逸510S商用台式办公电脑整机（i3-7100 4G1T 集显 WiFi 蓝牙 三年上门 win10）21.5英寸', '3599元', '2', '1545758189');
INSERT INTO `submit_shopinfo` VALUES ('13', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/index_copy1.html', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/img/5a582cbfNa68fe9e7.jpg', '联想ThinkPad 翼480 英特尔8代酷睿14英寸轻薄窄边框笔记本电脑（i5-8250U 8G 256GSSD 2G独显 FHD IPS屏）银', '5499元', '2', '1545758189');
INSERT INTO `submit_shopinfo` VALUES ('14', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/index_copy2.html', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/img/lenovo_sm.jpg', '联想（Lenovo）天逸510S商用台式办公电脑整机（i3-7100 4G1T 集显 WiFi 蓝牙 三年上门 win10）21.5英寸', '3599元', '2', '1545758368');
INSERT INTO `submit_shopinfo` VALUES ('15', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/index_copy1.html', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/img/5a582cbfNa68fe9e7.jpg', '联想ThinkPad 翼480 英特尔8代酷睿14英寸轻薄窄边框笔记本电脑（i5-8250U 8G 256GSSD 2G独显 FHD IPS屏）银', '5499元', '2', '1545758368');
INSERT INTO `submit_shopinfo` VALUES ('16', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/index.html', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/img/img1_54.jpg', '威龙远航 酷睿i5/8GDDR3/GTX1060 吃鸡游戏组装电脑主机台式机DIY家用办公组装机 配置三（酷睿i5+8G+GTX950）', '2699元', '4', '1545758368');
INSERT INTO `submit_shopinfo` VALUES ('17', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/index_copy2.html', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/img/lenovo_sm.jpg', '联想（Lenovo）天逸510S商用台式办公电脑整机（i3-7100 4G1T 集显 WiFi 蓝牙 三年上门 win10）21.5英寸', '3599元', '2', '1545758407');
INSERT INTO `submit_shopinfo` VALUES ('18', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/index_copy1.html', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/img/5a582cbfNa68fe9e7.jpg', '联想ThinkPad 翼480 英特尔8代酷睿14英寸轻薄窄边框笔记本电脑（i5-8250U 8G 256GSSD 2G独显 FHD IPS屏）银', '5499元', '2', '1545758407');
INSERT INTO `submit_shopinfo` VALUES ('19', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/index.html', 'http://localhost/JD/%E5%A8%81%E9%BE%99%E8%BF%9C%E8%88%AA%20%E9%85%B7%E7%9D%BF/img/img1_54.jpg', '威龙远航 酷睿i5/8GDDR3/GTX1060 吃鸡游戏组装电脑主机台式机DIY家用办公组装机 配置三（酷睿i5+8G+GTX950）', '2699元', '5', '1545758407');

-- ----------------------------
-- Table structure for `userinfo`
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) DEFAULT NULL,
  `userPass` varchar(255) DEFAULT NULL,
  `bothday` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `Consignee` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userinfo
-- ----------------------------
INSERT INTO `userinfo` VALUES ('26', '张三', '123456', '1970-1-1', '463797285@qq.com', '1234566', '张三', '湖里五通');
INSERT INTO `userinfo` VALUES ('27', '阿诗丹顿', '123456', '1970-1-1', '4637@qq.com', '1234567', '阿诗丹顿', '阿诗丹顿');
INSERT INTO `userinfo` VALUES ('28', '李四', '123456', '1970-1-1', '1111@QQ.com', '1234567', '李四', '湖里万达');
