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
import BookmarkIcon from "@material-ui/icons/Bookmark";

class Homepage extends React.Component {
  constructor(props) {
    super();
    const myOfflinePlayList = JSON.parse(localStorage.getItem("myOfflinePlayList"));
    this.state = {
      songsList: {},
      currentSong: {},
      myOfflinePlayList,
      selectMyList: "",
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
          bookmark: false,
        },
        {
          position: 2,
          songName: "second song",
          singerName: "Karuna Verma",
          songUrl: "song2.mpeg",
          bookmark: false,
        },
        {
          position: 3,
          songName: "third song",
          singerName: "Karuna Verma",
          songUrl: "song3.mpeg",
          bookmark: false,
        },
        {
          position: 4,
          songName: "fourth song",
          singerName: "Karuna Verma",
          songUrl: "song4.mpeg",
          bookmark: false,
        },
        {
          position: 5,
          songName: "fifth song",
          singerName: "Karuna Verma",
          songUrl: "song5.mpeg",
          bookmark: false,
        },
        {
          position: 1,
          songName: "first song",
          singerName: "Karuna Verma",
          songUrl: "song.mpeg",
          bookmark: false,
        },
        {
          position: 2,
          songName: "second song",
          singerName: "Karuna Verma",
          songUrl: "song2.mpeg",
          bookmark: false,
        },
        {
          position: 3,
          songName: "third song",
          singerName: "Karuna Verma",
          songUrl: "song3.mpeg",
          bookmark: false,
        },
        {
          position: 4,
          songName: "fourth song",
          singerName: "Karuna Verma",
          songUrl: "song4.mpeg",
          bookmark: false,
        },
        {
          position: 5,
          songName: "fifth song",
          singerName: "Karuna Verma",
          songUrl: "song5.mpeg",
          bookmark: false,
        },
      ],
      currentSong: { position: 1, songName: "first song", singerName: "Karuna Verma", songUrl: "song.mpeg" },
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
    var songsItem = {};
    this.setState({
      currentSong: {
        Bookmark: true,
      },
    });
    var songs = [singleSong];
    songsItem.myOfflinePlayList = songs;
    var offlineSong = JSON.parse(localStorage.getItem("myOfflinePlayList"));
    if (offlineSong === null) {
      console.log("null");
      localStorage.setItem("myOfflinePlayList", JSON.stringify(songsItem));
    } else {
      var mySongs = offlineSong.myOfflinePlayList.push(singleSong);
      localStorage.setItem("myOfflinePlayList", JSON.stringify(offlineSong));
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
                      {singleSong.bookmark ? (
                        <BookmarkIcon style={{ color: "white" }} />
                      ) : (
                        <BookmarkBorderIcon style={{ color: "white" }} />
                      )}
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
              {/* <ListItemLink href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemLink> */}
            </List>
          </div>
          <div style={{ width: "100vh", marginLeft: "9%" }}>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  textAlign: "center",
                  opacity: 0.9,
                  justifyContent: "center",
                  alignItems: "center",
                  height: "30vh",
                  flexDirection: "column",
                  width: "50vh",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  backgroundImage: `url("like-icon.jpeg")`,
                  marginLeft: "10%",
                }}
                onClick={() => this.setState({ selectMyList: "Offline" })}
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
                  backgroundImage: `url("like-icon.jpeg")`,
                  height: "30vh",
                  width: "50vh",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  marginLeft: "10%",
                }}
                onClick={() => this.setState({ selectMyList: "Liked" })}
              >
                <div>
                  <img style={{ height: "40px" }} src="play-audio-icon.png" alt="" />
                </div>
                <span style={{ color: "#f91909", fontSize: "1.5rem" }}>Like Songs</span>
              </div>
            </div>
            {this.state.selectMyList !== "" ? (
              <>
                <div
                  style={{
                    backgroundColor: "#944e4e",
                    borderRadius: "10px",
                    padding: "1%",
                    marginTop: "3%",
                    marginLeft: "10%",
                    width: "45%",
                  }}
                >
                  <span style={{ color: "white", fontSize: "1.5rem", marginLeft: "5%" }}>
                    {this.state.selectMyList} Songs
                  </span>
                </div>
                <div id="scroll" style={{ display: "flex", margin: "4% 3%", overflowY: "auto", overflowX: "auto" }}>
                  {this.state.songsList.map((singleSong, index) => (
                    <div
                      style={{
                        display: "flex",
                        textAlign: "center",
                        opacity: 0.9,
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        padding: "20px 35px",
                        backgroundColor: "#ad4747",
                        borderRadius: "10px",
                        marginLeft: "3%",
                        backgroundImage: `url("offline-image.jpg")`,
                      }}
                    >
                      <div>
                        <img style={{ height: "40px" }} src="play-audio-icon.png" alt="" />
                      </div>
                      <span style={{ color: "#f91909", fontSize: "1.5rem" }}>{singleSong.songName}</span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ position: "fixed", bottom: "10px", width: "90%" }}>
            <AudioPlayer
              //   autoPlay
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
