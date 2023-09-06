import React, { useState } from 'react'
import "./Nav.css"
import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"
import { BiBookBookmark } from "react-icons/bi"
import { RiServiceLine } from "react-icons/ri"
import { BiMessageSquareDetail } from "react-icons/bi"
import { MdWorkOutline } from "react-icons/md"
import { Tooltip } from '@mui/material'
import { styled } from '@mui/material/styles';
import { tooltipClasses } from '@mui/material/Tooltip';




function Nav() {

  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));

  const [activeNav, setActiveNav] = useState("#")

  return (
    <nav>
      <BootstrapTooltip title="home" placement='top-start' arrow backgroundColor="white">
        <a href='#home' onClick={() => { setActiveNav("#home") }} className={activeNav === "#home" ? "active" : ""} ><AiOutlineHome /></a>
      </BootstrapTooltip>

      <BootstrapTooltip title="about" placement='top-start' arrow>
        <a href="#about" onClick={() => { setActiveNav("#about") }} className={activeNav === "#about" ? "active" : ""} ><AiOutlineUser /></a>
      </BootstrapTooltip>

      <BootstrapTooltip title="experience" placement='top-start' arrow >
        <a href="#experience" onClick={() => { setActiveNav("#experience") }} className={activeNav === "#experience" ? "active" : ""}><BiBookBookmark /></a>
      </BootstrapTooltip>
      <BootstrapTooltip title="services" placement='top-start' arrow>
        <a href="#services" onClick={() => { setActiveNav("#services") }} className={activeNav === "#services" ? "active" : ""}><RiServiceLine /></a>
      </BootstrapTooltip>
      <BootstrapTooltip title="portfolio" placement='top-start' arrow>
        <a href="#Portfolio" onClick={() => { setActiveNav("#Portfolio") }} className={activeNav === "#Portfolio" ? "active" : ""}><MdWorkOutline /></a>
      </BootstrapTooltip>
      <BootstrapTooltip title="contact" placement='top-start' arrow>
        <a href="#contact" onClick={() => { setActiveNav("#contact") }} className={activeNav === "#contact" ? "active" : ""}><BiMessageSquareDetail /></a>
      </BootstrapTooltip>
    </nav>
  )
}

export default Nav
