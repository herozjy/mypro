/*
Navicat MySQL Data Transfer

Source Server         : my
Source Server Version : 50723
Source Host           : localhost:3306
Source Database       : myalipay

Target Server Type    : MYSQL
Target Server Version : 50723
File Encoding         : 65001

Date: 2019-01-22 23:38:46
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `appdata`
-- ----------------------------
DROP TABLE IF EXISTS `appdata`;
CREATE TABLE `appdata` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `isCheck` int(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of appdata
-- ----------------------------
INSERT INTO `appdata` VALUES ('1', '便民服务', '书签', '0', 'book');
INSERT INTO `appdata` VALUES ('2', '便民服务', '桌面', '0', 'desktop');
INSERT INTO `appdata` VALUES ('3', '便民服务', '蚂云', '1', 'cloud-download');
INSERT INTO `appdata` VALUES ('4', '便民服务', '安全锁', '0', 'lock');
INSERT INTO `appdata` VALUES ('5', '便民服务', '开锁专家', '0', 'unlock');
INSERT INTO `appdata` VALUES ('6', '便民服务', '免费下载', '1', 'download');
INSERT INTO `appdata` VALUES ('7', '便民服务', '心', '0', 'heart');
INSERT INTO `appdata` VALUES ('8', '财富管理', '淘宝', '0', 'taobao-circle');
INSERT INTO `appdata` VALUES ('9', '财富管理', '支付宝', '0', 'alipay-circle');
INSERT INTO `appdata` VALUES ('10', '财富管理', '微信', '0', 'wechat');
INSERT INTO `appdata` VALUES ('11', '财富管理', 'QQ', '1', 'qq');
INSERT INTO `appdata` VALUES ('12', '资金往来', 'IE', '0', 'ie');
INSERT INTO `appdata` VALUES ('13', '资金往来', 'chrome', '0', 'chrome');
INSERT INTO `appdata` VALUES ('14', '资金往来', '脸书', '0', 'facebook');
INSERT INTO `appdata` VALUES ('15', '资金往来', '知乎', '0', 'zhihu');
INSERT INTO `appdata` VALUES ('16', '资金往来', 'html5', '0', 'html5');
INSERT INTO `appdata` VALUES ('17', '购物娱乐', '购物', '0', 'shopping');
INSERT INTO `appdata` VALUES ('18', '购物娱乐', '电影', '0', 'video-camera');
INSERT INTO `appdata` VALUES ('19', '购物娱乐', '手机', '0', 'mobile');
INSERT INTO `appdata` VALUES ('20', '购物娱乐', '电话', '0', 'shop');
INSERT INTO `appdata` VALUES ('21', '购物娱乐', '汽车', '0', 'car');
INSERT INTO `appdata` VALUES ('22', '购物娱乐', '银行', '1', 'bank');
INSERT INTO `appdata` VALUES ('23', '购物娱乐', '保险', '0', 'insurance');

-- ----------------------------
-- Table structure for `isshow`
-- ----------------------------
DROP TABLE IF EXISTS `isshow`;
CREATE TABLE `isshow` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `isShow` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of isshow
-- ----------------------------
INSERT INTO `isshow` VALUES ('1', '0');
