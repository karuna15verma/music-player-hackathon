import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { ListItemText, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "./Homepage.css";

class Homepage extends React.Component {
  constructor(props) {
    super();
    const myOfflinePlayList = JSON.parse(localStorage.getItem("myOfflinePlayList"));
    this.state = {
      songsList: {},
      currentSong: {},
      myOfflinePlayList,
    };
  }

  componentWillMount() {
    this.setState({
      songsList: [
        {
          position: 1,
          songName: "first song",
          singerName: "Karuna Verma",
          songUrl: "song.mpeg",
        },
        {
          position: 2,
          songName: "second song",
          singerName: "Karuna Verma",
          songUrl: "song2.mpeg",
        },
        {
          position: 3,
          songName: "third song",
          singerName: "Karuna Verma",
          songUrl: "song3.mpeg",
        },
        {
          position: 4,
          songName: "fourth song",
          singerName: "Karuna Verma",
          songUrl: "song4.mpeg",
        },
        {
          position: 5,
          songName: "fifth song",
          singerName: "Karuna Verma",
          songUrl: "song5.mpeg",
        },
        {
          position: 1,
          songName: "first song",
          singerName: "Karuna Verma",
          songUrl: "song.mpeg",
        },
        {
          position: 2,
          songName: "second song",
          singerName: "Karuna Verma",
          songUrl: "song2.mpeg",
        },
        {
          position: 3,
          songName: "third song",
          singerName: "Karuna Verma",
          songUrl: "song3.mpeg",
        },
        {
          position: 4,
          songName: "fourth song",
          singerName: "Karuna Verma",
          songUrl: "song4.mpeg",
        },
        {
          position: 5,
          songName: "fifth song",
          singerName: "Karuna Verma",
          songUrl: "song5.mpeg",
        },
      ],
    });
  }

  setSong = (singleSong, index) => {
    this.setState({
      currentSong: {
        position: singleSong.position,
        songName: singleSong.songName,
        singerName: singleSong.singerName,
        songUrl: singleSong.songUrl,
      },
    });
  };

  setOfflineSong = (singleSong) => {
    console.log(singleSong);
    var offlineSong = JSON.parse(localStorage.getItem("myOfflinePlayList"));
    console.log(offlineSong);
    if (offlineSong === null) {
      var offLinePlayList = [];
      offLinePlayList.push(JSON.stringify(singleSong));
      console.log(offLinePlayList);
      localStorage.setItem("myOfflinePlayList", offLinePlayList);
    } else {
      var offLinePlayList = offlineSong;
      offLinePlayList.push(singleSong);
      localStorage.setItem("myOfflinePlayList", offLinePlayList);
    }
  };

  render() {
    const { currentSong } = this.state;
    console.log(this.state.myOfflinePlayList);
    return (
      <div
        style={{
          height: "100vh",
          backgroundRepeat: "round",
          backgroundColor: "black",
          backgroundImage: `url("body-background-image.jpg")`,
          //   backgroundColor: "#cccccc",
        }}
      >
        <div style={{ paddingTop: "3%", paddingLeft: "3%" }}>
          <span style={{ color: "white", fontSize: "3rem" }}>Music Player</span>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ width: "40vh", height: "70vh", marginLeft: "3%", marginTop: "1%" }}>
            <span style={{ color: "white" }}>My Play List</span>
            <List
              id="scroll"
              style={{ height: "65vh", overflowX: "auto", marginTop: "1%" }}
              component="nav"
              aria-label="secondary mailbox folders"
            >
              {this.state.songsList.map((singleSong, index) => (
                <ListItem
                  style={{
                    opacity: index + 1 === currentSong.position ? 0.5 : "",
                    border: index + 1 === currentSong.position ? "1px solid white" : "",
                    borderRadius: index + 1 === currentSong.position ? "10px" : "",
                  }}
                  onClick={() => this.setSong(singleSong, index)}
                  button
                >
                  <ListItemIcon>
                    <img style={{ height: "40px" }} src="play-audio-icon.png" alt="" />
                  </ListItemIcon>
                  <ListItemText
                    secondary={<span style={{ color: "white" }}>{singleSong.singerName}</span>}
                    style={{ color: "white" }}
                    primary={<span>{singleSong.songName}</span>}
                  />
                  <ListItemSecondaryAction>
                    <IconButton onClick={() => this.setOfflineSong(singleSong)} edge="end" aria-label="delete">
                      <FavoriteBorderIcon style={{ color: "white" }} />
                    </IconButton>
                    <IconButton onClick={() => this.setOfflineSong(singleSong)} edge="end" aria-label="delete">
                      <BookmarkBorderIcon style={{ color: "white" }} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
              {/* <ListItemLink href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemLink> */}
            </List>
          </div>
          <div
            style={{
              display: "flex",
              textAlign: "center",
              opacity: 0.9,
              justifyContent: "center",
              alignItems: "center",
              height: "25vh",
              flexDirection: "column",
              width: "25vh",
              backgroundColor: "white",
              borderRadius: "30px",
              marginLeft: "10%",
            }}
          >
            <div>
              <img style={{ height: "40px" }} src="play-audio-icon.png" alt="" />
            </div>
            <span style={{ color: "#f91909", fontSize: "1.5rem" }}>Offline Songs</span>
          </div>
          <div
            style={{
              display: "flex",
              textAlign: "center",
              opacity: 0.9,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "25vh",
              width: "25vh",
              backgroundColor: "white",
              borderRadius: "30px",
              marginLeft: "10%",
            }}
          >
            <div>
              <img style={{ height: "40px" }} src="play-audio-icon.png" alt="" />
            </div>
            <span style={{ color: "#f91909", fontSize: "1.5rem" }}>Liked Songs</span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ position: "fixed", bottom: "10px", width: "90%" }}>
            <AudioPlayer
              autoPlay
              src={this.state.currentSong.songUrl}
              onPlay={(e) => console.log("onPlay")}
              // other props here
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
