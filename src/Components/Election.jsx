import { Component } from "react";
import "../css/votes.css";

class Election extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes_mayor: [0, 0, 0],
      votes_vice: [0, 0, 0],
      votes_rep: [0, 0, 0, 0, 0],
    };
  }

  getMayorVote = (event) => {
    let vote_mayor = event.target.candidate_mayor.value;
    vote_mayor = Number(vote_mayor.charAt(3));
    let vm = this.state.votes_mayor;
    vm[vote_mayor] += 1;
    this.setState({ votes_mayor: vm });
  };

  getViceVote = (event) => {
    let vote_vice = event.target.candidate_vice.value;
    vote_vice = Number(vote_vice.charAt(3));
    let vv = this.state.votes_vice;
    vv[vote_vice] += 1;
    this.setState({ votes_vice: vv });
  };

  getRepVote = (event) => {
    let checked_rep = [
      event.target.candidate_rep0.checked,
      event.target.candidate_rep1.checked,
      event.target.candidate_rep2.checked,
      event.target.candidate_rep3.checked,
      event.target.candidate_rep4.checked,
    ];
    let vote_count = 0;
    for (let i = 0; i < checked_rep.length; i++) {
      if (checked_rep[i]) {
        vote_count++;
      }
    }
    if (vote_count <= 3) {
      let vr = this.state.votes_rep;
      for (let i = 0; i < checked_rep.length; i++) {
        if (checked_rep[i]) {
          vr[i] += 1;
        }
      }
      return true;
    } else {
      alert("Can only vote 0-3 representatives");
      return false;
    }
  };

  submitVotes = (event) => {
    event.preventDefault();
    let success = this.getRepVote(event);
    if (success) {
      this.getMayorVote(event);
      this.getViceVote(event);
    }
  };

  render() {
    return (
      <>
        <h1>Voting Form</h1>
        <form onSubmit={this.submitVotes}>
          <h2>Mayor</h2>
          <input type="radio" name="candidate_mayor" value="can0" required />
          Dina Pili
          <br />
          <input type="radio" name="candidate_mayor" value="can1" required />
          Lucky Chan
          <br />
          <input type="radio" name="candidate_mayor" value="can2" required />
          Pama Hi-in
          <br />
          <h2>Vice president</h2>
          <input type="radio" name="candidate_vice" value="can0" required />
          Pat Tumabakita
          <br />
          <input type="radio" name="candidate_vice" value="can1" required />
          Ben Eko
          <br />
          <input type="radio" name="candidate_vice" value="can2" required />
          Crystal Maiden
          <h2>Representative</h2>
          <input type="checkbox" name="candidate_rep0" value="can0" />
          Juan Tutri
          <br />
          <input type="checkbox" name="candidate_rep1" value="can1" />
          Tom Mabakana
          <br />
          <input type="checkbox" name="candidate_rep2" value="can2" />
          Cory Corykok
          <br />
          <input type="checkbox" name="candidate_rep3" value="can3" />
          Anne Nonanaman
          <br />
          <input type="checkbox" name="candidate_rep4" value="can4" />
          Pete Chapay
          <br />
          <input type="submit" class="btn btn-primary" />
        </form>
        <h1>Vote Record</h1>
        <table class="table">
          <tr>
            <th>Name</th>
            <th>Postion</th>
            <th>Total Votes</th>
          </tr>
          <tr className={this.state.votes_mayor[0] ? "black" : "gray"}>
            <td>Dina Pili</td>
            <td>Mayor</td>
            <td>{this.state.votes_mayor[0]}</td>
          </tr>
          <tr className={this.state.votes_mayor[1] ? "black" : "gray"}>
            <td>Lucky Chan</td>
            <td>Mayor</td>
            <td>{this.state.votes_mayor[1]}</td>
          </tr>
          <tr className={this.state.votes_mayor[2] ? "black" : "gray"}>
            <td>Pama Hi-in</td>
            <td>Mayor</td>
            <td>{this.state.votes_mayor[2]}</td>
          </tr>
          <tr className={this.state.votes_vice[0] ? "black" : "gray"}>
            <td>Pat Tumabakita</td>
            <td>Vice President</td>
            <td>{this.state.votes_vice[0]}</td>
          </tr>
          <tr className={this.state.votes_vice[1] ? "black" : "gray"}>
            <td>Ben Eko</td>
            <td>Vice President</td>
            <td>{this.state.votes_vice[1]}</td>
          </tr>
          <tr className={this.state.votes_vice[2] ? "black" : "gray"}>
            <td>Crystal Maiden</td>
            <td>Vice President</td>
            <td>{this.state.votes_vice[2]}</td>
          </tr>
          <tr className={this.state.votes_rep[0] ? "black" : "gray"}>
            <td>Juan Tutri</td>
            <td>Representative</td>
            <td>{this.state.votes_rep[0]}</td>
          </tr>
          <tr className={this.state.votes_rep[1] ? "black" : "gray"}>
            <td>Tom Mabakana</td>
            <td>Representative</td>
            <td>{this.state.votes_rep[1]}</td>
          </tr>
          <tr className={this.state.votes_rep[2] ? "black" : "gray"}>
            <td>Cory Corykok</td>
            <td>Representative</td>
            <td>{this.state.votes_rep[2]}</td>
          </tr>
          <tr className={this.state.votes_rep[3] ? "black" : "gray"}>
            <td>Anne Nonanaman</td>
            <td>Representative</td>
            <td>{this.state.votes_rep[3]}</td>
          </tr>
          <tr className={this.state.votes_rep[4] ? "black" : "gray"}>
            <td>Pete Chapay</td>
            <td>Representative</td>
            <td>{this.state.votes_rep[4]}</td>
          </tr>
        </table>
      </>
    );
  }
}
export default Election;
