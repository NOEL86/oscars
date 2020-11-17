import React, { Component } from "react";
import NavTwo from "../Components/NavTwo";
import "./vote.css";
import fire from "../firebase";
import { auth } from "../firebase.js";

class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      bestPicture: "",
      supportingActor: "",
      supportingActress: "",
      bestActor: "",
      bestActress: "",
      foreignFilm: "",
      documentaryShort: "",
      documentaryFeature: "",
      song: "",
      animatedFeature: "",
      adaptedScreenplay: "",
      originalScreenplay: "",
      director: "",
      productionDesign: "",
      cinematography: "",
      costume: "",
      soundEditing: "",
      soundMixing: "",
      animatedShort: "",
      liveActionShort: "",
      originalScore: "",
      visualEffects: "",
      editing: "",
      makeup: "",
      info: false,
      loaded: false
    };

    this.voteSubmit = this.voteSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.changeVote = this.changeVote.bind(this);
    // this.updateValues = this.updateValues.bind(this);
  }

  componentDidMount = () => {
    let that = this;
    auth.onAuthStateChanged(function(user) {
      if (user) {
        let id = user.uid;
        let email = user.email;
        console.log(id);
        console.log(email);

        // let first = user.first
        // let last = user.last

        let userInfo = fire.database().ref("users/" + id);
        userInfo
          .child("vote")
          .once("value")
          .then(snap => {
            // console.log(snap.val());
            if (snap.val()) {
              that.setState({
                first_name: snap.child("first").val(),
                last_name: snap.child("last").val(),
                bestActor: snap.child("bestActor").val(),
                bestPicture: snap.child("bestPicture").val(),
                supportingActor: snap.child("supportingActor").val(),
                supportingActress: snap.child("supportingActress").val(),
                bestActress: snap.child("bestActress").val(),
                foreignFilm: snap.child("foreignFilm").val(),
                documentaryShort: snap.child("documentaryShort").val(),
                documentaryFeature: snap.child("documentaryFeature").val(),
                song: snap.child("song").val(),
                animatedFeature: snap.child("animatedFeature").val(),
                adaptedScreenplay: snap.child("adaptedScreenplay").val(),
                originalScreenplay: snap.child("originalScreenplay").val(),
                director: snap.child("director").val(),
                productionDesign: snap.child("productionDesign").val(),
                cinematography: snap.child("cinematography").val(),
                costume: snap.child("costume").val(),
                soundEditing: snap.child("soundEditing").val(),
                soundMixing: snap.child("soundMixing").val(),
                animatedShort: snap.child("animatedShort").val(),
                liveActionShort: snap.child("liveActionShort").val(),
                originalScore: snap.child("originalScore").val(),
                visualEffects: snap.child("visualEffects").val(),
                editing: snap.child("editing").val(),
                makeup: snap.child("makeup").val(),
                info: true,
                loaded: true
              });
            } else {
              return;
            }
          });
      } else {
        window.location.href = "/login#/login";
      }
    });
  };

  changeVote = e => {
    e.preventDefault();
    this.setState({
      info: false,
      bestPicture: "",
      supportingActor: "",
      supportingActress: "",
      bestActor: "",
      bestActress: "",
      foreignFilm: "",
      documentaryShort: "",
      documentaryFeature: "",
      song: "",
      animatedFeature: "",
      adaptedScreenplay: "",
      originalScreenplay: "",
      director: "",
      productionDesign: "",
      cinematography: "",
      costume: "",
      soundEditing: "",
      soundMixing: "",
      animatedShort: "",
      liveActionShort: "",
      originalScore: "",
      visualEffects: "",
      editing: "",
      makeup: ""
    });
  };

  voteSubmit = e => {
    e.preventDefault();

    const vote = {
      first: this.state.first_name,
      last: this.state.last_name,
      bestPicture: this.state.bestPicture,
      bestActor: this.state.bestActor,
      bestActress: this.state.bestActress,
      supportingActress: this.state.supportingActress,
      supportingActor: this.state.supportingActor,
      foreignFilm: this.state.foreignFilm,
      documentaryShort: this.state.documentaryShort,
      documentaryFeature: this.state.documentaryFeature,
      song: this.state.song,
      animatedFeature: this.state.animatedFeature,
      animatedShort: this.state.animatedShort,
      originalScreenplay: this.state.originalScreenplay,
      originalScore: this.state.originalScore,
      director: this.state.director,
      cinematography: this.state.cinematography,
      costume: this.state.costume,
      soundMixing: this.state.soundMixing,
      soundEditing: this.state.soundEditing,
      makeup: this.state.makeup,
      visualEffects: this.state.visualEffects,
      editing: this.state.editing,
      liveActionShort: this.state.liveActionShort,
      adaptedScreenplay: this.state.adaptedScreenplay,
      productionDesign: this.state.productionDesign
    };

    auth.onAuthStateChanged(function(user) {
      if (user) {
        console.log(user.uid);
        console.log(user.email);

        fire
          .database()
          .ref("users/" + user.uid)
          .set({
            vote: vote
          });
      } else {
        window.location.href = "/login";
      }
    });

    this.setState({
      info: true
    });
  };

  // console.log(vote);

  handleInputChange = event => {
    const { name, value } = event.target;
    // console.log(name, value);
    this.setState({
      [name]: value
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    //hit db and get votes by sign in
  }

  render() {
    return this.state.info ? (
      <div>
        <NavTwo />

        <div className="row" style={{ display: "flex" }}>
          <div className="col s12 m8 l8">
            <h1>
              Hi {this.state.first_name} {this.state.last_name}!
            </h1>
          </div>
        </div>

        <div className="row" style={{ display: "flex" }}>
          <div className="col s12 m8 l8">
            <h5>Best Picture : {this.state.bestPicture}</h5>
            <h5>Best Actor : {this.state.bestActor}</h5>
            <h5>Best Actress : {this.state.bestActress}</h5>
            <h5>Best Supporting Actor : {this.state.supportingActor}</h5>
            <h5>Best Supporting Actress : {this.state.supportingActress}</h5>
            <h5>Foreign Language Film : {this.state.foreignFilm}</h5>
            <h5>Documentary : {this.state.documentaryFeature}</h5>
            <h5>Documentary Short : {this.state.documentaryShort}</h5>
            <h5>Best Animated Film : {this.state.animatedFeature}</h5>
            <h5>Best Animated Short Film : {this.state.animatedShort}</h5>
            <h5>Original Song : {this.state.song}</h5>
            <h5>Adapted Screenplay : {this.state.adaptedScreenplay}</h5>
            <h5>Original Screenplay : {this.state.originalScreenplay}</h5>
            <h5>Best Director : {this.state.director}</h5>
            <h5>Production Design : {this.state.productionDesign}</h5>
            <h5>Cinematography : {this.state.cinematography}</h5>
            <h5>Costume Design : {this.state.costume}</h5>
            <h5>Sound Editing : {this.state.soundEditing}</h5>
            <h5>Sound Mixing : {this.state.soundMixing}</h5>
            <h5>Live Action Short : {this.state.liveActionShort}</h5>
            <h5>Original Score : {this.state.originalScore}</h5>
            <h5>Visual Effects : {this.state.visualEffects}</h5>
            <h5>Film Editing : {this.state.editing}</h5>
            <h5>Makeup & Hairstyling : {this.state.makeup}</h5>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <div id="alignRight">
              <button
                id="btn"
                className="btn waves-effect disabled"
                type="submit"
                onClick={this.changeVote}
                name="action"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div id="vote">
        <NavTwo />

        <div className="row">
          <div className="col s2 m3" />
          <div className="col s8 m8">
            <form onSubmit={this.voteSubmit} className="col s12">
              <div className="row">
                <h1 id="heading">Add Your Votes</h1>
              </div>
              <div className="row">
                <div className="input-field col s3">
                  <input
                    id="first_name"
                    type="text"
                    className="validate"
                    name="first_name"
                    value={this.state.first_name}
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor="first_name">First Name</label>
                </div>
                <div className="input-field col s3">
                  <input
                    id="last_name"
                    type="text"
                    className="validate"
                    name="last_name"
                    value={this.state.last_name}
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor="last_name">Last Name</label>
                </div>
              </div>
              <div className="input-field col s12">
                <h5>
                  <strong>Best Picture</strong>
                </h5>

                <div className="row">
                  <div className="col s4">
                    <select
                      name="bestPicture"
                      defaultValue={this.state.bestPicture}
                      onChange={this.handleChange}
                    >
                      <option value=""></option>
                      <option value="The Irishman">The Irishman</option>
                      <option value="Jojo Rabit">Jojo Rabbit</option>
                      <option value="Little Women">Little Women</option>
                      <option value="1917">1917</option>
                      <option value="Ford V Ferrari">Ford v Ferrari</option>
                      <option value="Marriage Story">Marriage Story</option>
                      <option value="Parasite">Parasite</option>
                      <option value="Joker">Joker</option>
                      <option value="OUATIH">
                        Once Upon A Time In Hollywood
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-field col s12">
                <h5>
                  <strong>Best Actor</strong>
                </h5>

                <div className="row">
                  <div className="col s4">
                    <select
                      name="bestActor"
                      defaultValue={this.state.bestActor}
                      onChange={this.handleChange}
                    >
                      <option value=""></option>
                      <option value="Antonio Banderas">Antonio Banderas</option>
                      <option value="Adam Driver">Adam Driver</option>
                      <option value="Joaquin Phoenix">Joaquin Phoenix</option>
                      <option value="Jonathan Price">Jonathan Price</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-field col s12">
                <h5>
                  <strong>Best Actress</strong>
                </h5>

                <div className="row">
                  <div className="col s4">
                    <select
                      name="bestActress"
                      defaultValue={this.state.bestActress}
                      onChange={this.handleChange}
                    >
                      <option value=""></option>
                      <option value="CynthiaErivo">Cynthia Erivo</option>
                      <option value="Scarlett Johansson">
                        Scarlett Johansson
                      </option>
                      <option value="Saoirse Ronan">Saoirse Ronan</option>
                      <option value="Rene Zellweger">Rene Zellweger</option>
                      <option value="Charlize Theron">Charlize Theron</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-field col s12">
                <h5>
                  <strong>Best Supporting Actor</strong>
                </h5>

                <div className="row">
                  <div className="col s4">
                    <select
                      name="supportingActor"
                      defaultValue={this.state.supportingActor}
                      onChange={this.handleChange}
                    >
                      <option value=""></option>
                      <option value="Tom Hanks">Tom Hanks</option>
                      <option value="Anthony Hopkins">Anthony Hopkins</option>
                      <option value="Al Pacino">Al Pacino</option>
                      <option value="Joe Pesci">Joe Pesci</option>
                      <option value="Brad Pitt">Brad Pitt</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-field col s12">
                <h5>
                  <strong>Best Supporting Actress</strong>
                </h5>

                <div className="row">
                  <div className="col s4">
                    <select
                      name="supportingActress"
                      defaultValue={this.state.supportingActress}
                      onChange={this.handleChange}
                    >
                      <option value=""></option>
                      <option value="Kathy Bates">Kathy Bates</option>
                      <option value="Scarlett Johansson">
                        Scarlett Johansson
                      </option>
                      <option value="Florence Pugh">Florence Pugh</option>
                      <option value="Margot Robbie">Margot Robbie</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-field col s12">
                <h5>
                  <strong>Cinematographer</strong>
                </h5>

                <div className="row">
                  <div className="col s4">
                    <select
                      name="cinematography"
                      defaultValue={this.state.cinematography}
                      onChange={this.handleChange}
                    >
                      <option value=""></option>
                      <option value="1917">1917</option>
                      <option value="The Irishman">The Irishman</option>
                      <option value="Joker">Joker</option>
                      <option value="OUATIH">
                        Once Upon A Time In Hollywood
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-field col s12">
                <h5>
                  <strong>Best Director</strong>
                </h5>

                <div className="row">
                  <div className="col s4">
                    <select
                      name="director"
                      defaultValue={this.state.director}
                      onChange={this.handleChange}
                    >
                      <option value=""></option>
                      <option value="Martin Scorsese">
                        Martin Scorsese "The Irishmen"
                      </option>
                      <option value="Quentin Tarantino">
                        Quentin Tarantino "Once Upon A Time In Hollywood"
                      </option>
                      <option value="Bong Jooh-ho">
                        Bong Jooh-ho "Parasite"
                      </option>
                      <option value="Sam Mendez">Sam Mendez "1917"</option>
                      <option value="Todd Phillips">
                        Todd Phillips "Joker"
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-field col s12">
                <h5>
                  <strong>Live Action Short Film</strong>
                </h5>

                <div className="row">
                  <div className="col s4">
                    <select
                      name="liveActionShort"
                      defaultValue={this.state.liveActionShort}
                      onChange={this.handleChange}
                    >
                      <option value=""></option>
                      <option value="Brotherhood">Brotherhood</option>
                      <option value="The Neighbors Window">
                        The Neighbors Window
                      </option>
                      <option value="Saria">Saria</option>
                      <option value="A Sister">A Sister</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-field col s12">
                <h5>
                  <strong>Animated Short Film</strong>
                </h5>

                <div className="row">
                  <div className="col s4">
                    <select
                      name="animatedShort"
                      defaultValue={this.state.animatedShort}
                      onChange={this.handleChange}
                    >
                      <option value=""></option>
                      <option value="Dcera">Dcera</option>
                      <option value="Hair Love">Hair Love</option>
                      <option value="Kitbull">Kitbull</option>
                      <option value="Memorable">Memorable</option>
                      <option value="Sister">Sister</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-field col s12">
                <h5>
                  <strong>Animated Feature Film</strong>
                </h5>

                <div className="row">
                  <div className="col s4">
                    <select
                      name="animatedFeature"
                      defaultValue={this.state.animatedFeature}
                      onChange={this.handleChange}
                    >
                      <option value=""></option>
                      <option value="HTTYD">
                        How to Train Your Dragon: "The Hidden World"
                      </option>
                      <option value="I Lost My Body">I Lost My Body</option>
                      <option value="Klaus">Klaus</option>
                      <option value="Missing Link">Missing Link</option>
                      <option value="Toy Story 4">Toy Story 4</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-field col s12">
                <h5>
                  <strong>Visual Effects</strong>
                </h5>

                <div className="row">
                  <div className="col s4">
                    <select
                      name="visualEffects"
                      defaultValue={this.state.visualEffects}
                      onChange={this.handleChange}
                    >
                      <option value=""></option>
                      <option value="Avengers">Avengers: Endgame</option>
                      <option value="The Lion King">The Lion King</option>
                      <option value="The Irishman">The Irishman</option>
                      <option value="1917">1917</option>
                      <option value="Star Wars">
                        Star Wars: Rise of Skywalker
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-field col s12">
                <h5>
                  <strong>Film Editing</strong>
                </h5>

                <div className="row">
                  <div className="col s4">
                    <select
                      name="editing"
                      defaultValue={this.state.editing}
                      onChange={this.handleChange}
                    >
                      <option value=""></option>
                      <option value="The Irishman">The Irishman</option>
                      <option value="Ford V Ferrari">Ford v Ferrari</option>
                      <option value="Joker">Joker</option>
                      <option value="Parasite">Parasite</option>
                      <option value="Jojo Rabbit">Jojo Rabbit</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-field col s12">
                <h5>
                  <strong>Makeup & Hairstyling</strong>
                </h5>

                <div className="row">
                  <div className="col s4">
                    <select
                      name="makeup"
                      defaultValue={this.state.makeup}
                      onChange={this.handleChange}
                    >
                      <option value=""></option>
                      <option value="Bombshell">Bombshell</option>
                      <option value="Joker">Joker</option>
                      <option value="Judy">Judy</option>
                      <option value="Maleficent">
                        Maleficent: Mistress of Evil
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-field col s12">
                <h5>
                  <strong>Adapted Screenplay</strong>
                </h5>

                <div className="row">
                  <div className="col s4">
                    <select
                      name="adaptedScreenplay"
                      defaultValue={this.state.adaptedScreenplay}
                      onChange={this.handleChange}
                    >
                      <option value=""></option>
                      <option value="The Irishman">The Irishman</option>
                      <option value="Joker">Joker</option>
                      <option value="Little Women">Little Women</option>
                      <option value="The Two Popes">The Two Popes</option>
                      <option value="Jojo Rabbit">Jojo Rabbit</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-field col s12">
                <h5>
                  <strong>Original Screenplay</strong>
                </h5>

                <div className="row">
                  <div className="col s4">
                    <select
                      name="originalScreenplay"
                      defaultValue={this.state.originalScreenplay}
                      onChange={this.handleChange}
                    >
                      <option value=""></option>
                      <option value="Marriage Story">Marriage Story</option>
                      <option value="Once Upon a Time in Hollywood">
                        Once Upon a Time in Hollywood
                      </option>
                      <option value="Parasite">Parasite</option>
                      <option value="Knives Out">Knives Out</option>
                      <option value="1917">1917</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-field col s12">
                <h5>
                  <strong>Production Design</strong>
                </h5>

                <div className="row">
                  <div className="col s4">
                    <select
                      name="productionDesign"
                      defaultValue={this.state.productionDesign}
                      onChange={this.handleChange}
                    >
                      <option value=""></option>
                      <option value="Once Upon a Time in Hollywood">
                        Once Upon a Time in Hollywood
                      </option>
                      <option value="Jojo Rabbit">Jojo Rabbit</option>
                      <option value="Parasite">Parasite</option>
                      <option value="The Irishman">The Irishman</option>
                      <option value="1917">1917</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-field col s12">
                <h5>
                  <strong>Costume Design</strong>
                </h5>

                <div className="row">
                  <div className="col s4">
                    <select
                      name="costume"
                      defaultValue={this.state.costume}
                      onChange={this.handleChange}
                    >
                      <option value=""></option>
                      <option value="OUATIH">
                        Once Upon A Time In Hollywood
                      </option>
                      <option value="The Irishman">The Irishan</option>
                      <option value="Joker">Joker</option>
                      <option value="Little Women">Little Women</option>
                      <option value="Jojo Rabbit">Jojo Rabbit</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-field col s12">
                <h5>
                  <strong>Sound Editing</strong>
                </h5>

                <div className="row">
                  <div className="col s4">
                    <select
                      name="soundEditing"
                      defaultValue={this.state.soundEditing}
                      onChange={this.handleChange}
                    >
                      <option value=""></option>
                      <option value="OUATIH">
                        Once Upon A Time In Hollywood
                      </option>
                      <option value="Star Wars">
                        Star Wars: Rise of Skywalker
                      </option>
                      <option value="1917">1917</option>
                      <option value="Ford V Ferrari">Ford V Ferrari</option>
                      <option value="Joker">Joker</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-field col s12">
                <h5>
                  <strong>Sound Mixing</strong>
                </h5>

                <div className="row">
                  <div className="col s4">
                    <select
                      name="soundMixing"
                      defaultValue={this.state.soundMixing}
                      onChange={this.handleChange}
                    >
                      <option value=""></option>
                      <option value="OUATIH">
                        Once Upon A Time In Hollywood
                      </option>
                      <option value="Ford V Ferrari">Ford V Ferrari</option>
                      <option value="1917">1917</option>
                      <option value="Joker">Joker</option>
                      <option value="Ad Astra">Ad Astra</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-field col s12">
                <h5>
                  <strong>Documentary Short</strong>
                </h5>

                <div className="row">
                  <div className="col s4">
                    <select
                      name="documentaryShort"
                      defaultValue={this.state.documentaryShort}
                      onChange={this.handleChange}
                    >
                      <option value=""></option>
                      <option value="In The Absence">In The Absence</option>
                      <option value="Learning to Skateboard">
                        Learning to Skateboard in Warzone (If You're a Girl)
                      </option>
                      <option value="Life Overtakes Me">
                        Life Overtakes Me
                      </option>
                      <option value="St. Louis Superman">
                        St. Louis Superman
                      </option>
                      <option value="Walk Run Cha-Cha">Walk Run Cha-Cha</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-field col s12">
                <h5>
                  <strong>Documentary Feature</strong>
                </h5>

                <div className="row">
                  <div className="col s4">
                    <select
                      name="documentaryFeature"
                      defaultValue={this.state.documentaryFeature}
                      onChange={this.handleChange}
                    >
                      <option value=""></option>
                      <option value="American Factory">American Factory</option>
                      <option value="The Edge of Democracy">
                        The Edge of Democracy
                      </option>
                      <option value="Honeyland">Honeyland</option>
                      <option value="For Sama">For Sama</option>
                      <option value="Jojo Rabbit">Jojo Rabbit</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-field col s12">
                <h5>
                  <strong>Foreign Language Film</strong>
                </h5>

                <div className="row">
                  <div className="col s4">
                    <select
                      name="foreignFilm"
                      defaultValue={this.state.foreignFilm}
                      onChange={this.handleChange}
                    >
                      <option value=""></option>
                      <option value="Parasite">Parasite (South Korea)</option>
                      <option value="Pain and Glory">
                        Pain and Glory (Spain)
                      </option>
                      <option value="Les Miserables">
                        Les Miserables (France)
                      </option>
                      <option value="Honeyland">
                        Honeyland (North Macedonia)
                      </option>
                      <option value="Corpus Christi">
                        Corpus Christi (Poland)
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-field col s12">
                <h5>
                  <strong>Original Score</strong>
                </h5>

                <div className="row">
                  <div className="col s4">
                    <select
                      name="originalScore"
                      defaultValue={this.state.originalScore}
                      onChange={this.handleChange}
                    >
                      <option value=""></option>
                      <option value="1917">1917</option>
                      <option value="Joker">Joker</option>
                      <option value="Little Women">Little Women</option>
                      <option value="Marriage Story">Marriage Story</option>
                      <option value="Star Wars">
                        Star Wars: Rise of Skywalker
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-field col s12">
                <h5>
                  <strong>Original Song</strong>
                </h5>

                <div className="row">
                  <div className="col s4">
                    <select
                      name="song"
                      defaultValue={this.state.song}
                      onChange={this.handleChange}
                    >
                      <option value=""></option>
                      <option value="Breakthrough">
                        I'm Standing With You "Breakthrough"
                      </option>
                      <option value="Frozen II">
                        Into the Unknown "Frozen II"
                      </option>
                      <option value="Hariet">Stand Up "Hariet"</option>
                      <option value="Rocketman">
                        I'm Gonna Love Me Again "Rocketman"
                      </option>
                      <option value="Toy Story 4">
                        I Can't Let You Throw Yourself Away "Toy Story 4"
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div id="alignRight" className="card-action">
                <button
                  id="btn"
                  className="btn waves-effect"
                  type="submit"
                  onSubmit={this.voteSubmit}
                  name="action"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Vote;
