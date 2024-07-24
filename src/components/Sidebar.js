import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, Typography, Divider } from '@mui/material';
import { ExpandLess, ExpandMore, Home, Event, Business, AccountBalance, Store, FormatListBulleted, Person, Settings, Backup, Create, Folder } from '@mui/icons-material';
import useStyles from './SidebarStyles';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/atalayy.png'; // Doğru yoldan import ediyoruz

const Sidebar = () => {
  const classes = useStyles();
  const location = useLocation();
  const [open, setOpen] = useState({});

  const handleClick = (item) => {
    setOpen({ ...open, [item]: !open[item] });
  };

  const isActive = (path) => location.pathname === path;

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar}>
        <Typography variant="h6" noWrap color="primary">
          ATALAY
        </Typography>
        <Typography variant="subtitle1" noWrap>
          Düğün & Davet
        </Typography>
      </div>
      <List>
        <ListItem>
          <ListItemText primary="Kullanıcı / Şube" secondary="Erman Tansal / Yönetim" />
        </ListItem>
        <Divider />
        <Typography className={classes.sectionTitle}>SALON YÖNETİM</Typography>
        <ListItem button component={NavLink} to="/" className={isActive("/") ? classes.active : ""}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Ana Sayfa" />
        </ListItem>
        <ListItem button onClick={() => handleClick('gorusme')}>
          <ListItemIcon>
            <Event />
          </ListItemIcon>
          <ListItemText primary="Görüşme / Teklif" />
          {open.gorusme ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open.gorusme} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* Alt Menü Öğeleri */}
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick('satis')}>
          <ListItemIcon>
            <Business />
          </ListItemIcon>
          <ListItemText primary="Satış Yönetimi" />
          {open.satis ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open.satis} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* Alt Menü Öğeleri */}
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick('kina')}>
          <ListItemIcon>
            <Event />
          </ListItemIcon>
          <ListItemText primary="Kına Organizasyon" />
          {open.kina ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open.kina} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* Alt Menü Öğeleri */}
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick('kasa')}>
          <ListItemIcon>
            <AccountBalance />
          </ListItemIcon>
          <ListItemText primary="Kasa Yönetimi" />
          {open.kasa ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open.kasa} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* Alt Menü Öğeleri */}
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick('depo')}>
          <ListItemIcon>
            <Store />
          </ListItemIcon>
          <ListItemText primary="Depo Yönetimi" />
          {open.depo ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open.depo} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* Alt Menü Öğeleri */}
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick('fiyat')}>
          <ListItemIcon>
            <FormatListBulleted />
          </ListItemIcon>
          <ListItemText primary="Fiyat Listeleri" />
          {open.fiyat ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open.fiyat} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* Alt Menü Öğeleri */}
          </List>
        </Collapse>
        <Divider />
        <Typography className={classes.sectionTitle}>ORGANİZASYON YÖNETİM</Typography>
        <ListItem button component={NavLink} to="/detay-durumlari" className={isActive("/detay-durumlari") ? classes.active : ""}>
          <ListItemIcon>
            <Folder />
          </ListItemIcon>
          <ListItemText primary="Detay Durumları" />
        </ListItem>
        <ListItem button component={NavLink} to="/detay-aramalari" className={isActive("/detay-aramalari") ? classes.active : ""}>
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Detay Aramaları" />
        </ListItem>
        <Divider />
        <Typography className={classes.sectionTitle}>RAPORLAR VE LİSTELER</Typography>
        <ListItem button onClick={() => handleClick('rapor')}>
          <ListItemIcon>
            <FormatListBulleted />
          </ListItemIcon>
          <ListItemText primary="Raporlar" />
          {open.rapor ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open.rapor} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* Alt Menü Öğeleri */}
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick('liste')}>
          <ListItemIcon>
            <FormatListBulleted />
          </ListItemIcon>
          <ListItemText primary="Listeler" />
          {open.liste ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open.liste} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* Alt Menü Öğeleri */}
          </List>
        </Collapse>
        <Divider />
        <Typography className={classes.sectionTitle}>AYARLAR</Typography>
        <ListItem button onClick={() => handleClick('genel')}>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Genel Ayarlar" />
          {open.genel ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open.genel} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* Alt Menü Öğeleri */}
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick('sistem')}>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Sistem Ayarları" />
          {open.sistem ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open.sistem} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* Alt Menü Öğeleri */}
          </List>
        </Collapse>
        <Divider />
        <Typography className={classes.sectionTitle}>DATABASE İŞLEMLERİ</Typography>
        <ListItem button onClick={() => handleClick('tablo')}>
          <ListItemIcon>
            <Backup />
          </ListItemIcon>
          <ListItemText primary="Tablo Listeleri" />
          {open.tablo ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open.tablo} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* Alt Menü Öğeleri */}
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick('yedekleme')}>
          <ListItemIcon>
            <Backup />
          </ListItemIcon>
          <ListItemText primary="Yedekleme İşlemleri" />
          {open.yedekleme ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open.yedekleme} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* Alt Menü Öğeleri */}
          </List>
        </Collapse>
        <Divider />
        <Typography className={classes.sectionTitle}>KISAYOLLAR</Typography>
        <ListItem button component={NavLink} to="/yeni-sozlesme" className={isActive("/yeni-sozlesme") ? classes.active : ""}>
        <ListItemIcon>
        <Create />
      </ListItemIcon>
      <ListItemText primary="Yeni Sözleşme" />
    </ListItem>
    <ListItem button component={NavLink} to="/krokiler" className={isActive("/krokiler") ? classes.active : ""}>
      <ListItemIcon>
        <Folder />
      </ListItemIcon>
      <ListItemText primary="Krokiler" />
    </ListItem>
    <ListItem button component={NavLink} to="/fiyat-listeleri-2024" className={isActive("/fiyat-listeleri-2024") ? classes.active : ""}>
      <ListItemIcon>
        <FormatListBulleted />
      </ListItemIcon>
      <ListItemText primary="Fiyat Listeleri - 2024" />
    </ListItem>
    <ListItem button component={NavLink} to="/fiyat-listeleri-2025" className={isActive("/fiyat-listeleri-2025") ? classes.active : ""}>
      <ListItemIcon>
        <FormatListBulleted />
      </ListItemIcon>
      <ListItemText primary="Fiyat Listeleri - 2025" />
    </ListItem>
    <ListItem button component={NavLink} to="/kasa-defteri" className={isActive("/kasa-defteri") ? classes.active : ""}>
      <ListItemIcon>
        <AccountBalance />
      </ListItemIcon>
      <ListItemText primary="Kasa Defteri" />
    </ListItem>
    <Divider />
    <Typography className={classes.sectionTitle}>KULLANICI YÖNETİMİ</Typography>
    <ListItem button component={NavLink} to="/kullanici-bilgileri" className={isActive("/kullanici-bilgileri") ? classes.active : ""}>
      <ListItemIcon>
        <Person />
      </ListItemIcon>
      <ListItemText primary="Kullanıcı Bilgileri" />
    </ListItem>
  </List>
</Drawer>
);
};

export default Sidebar;