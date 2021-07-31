import React,{Component} from 'react'
import Adsense from 'react-adsense'
import {
  Advertisement,
  Container,
  Divider,
  Header,
  Icon,
  Message
} from "semantic-ui-react";

class BasicAd extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <ins
        className="adsbygoogle"
        data-ad-client="ca-pub-4591861188995436"
        data-ad-slot="4640466102"
        google_adtest = "on"
        style={{ display: "inline-block", height: 250, width: 300 }}
      />
    );
  }
}


function index() {
  return (
    <Advertisement unit="medium rectangle">
      <BasicAd/>
    </Advertisement>
    
  )
}

export default index
