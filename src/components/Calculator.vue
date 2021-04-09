<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div>
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">
          SGE Champions League Kalkulator
        </h1>
      </div>
    </header>
    <main>
      <div class="max-w-screen-xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-4 py-6 sm:px-0">
          <!-- This example requires Tailwind CSS v2.0+ -->
          <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div
                class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
              >
                <div
                  class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
                >
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                      <tr>
                        <th scope="col"></th>
                        <th scope="col" class=""></th>
                        <th
                          scope="col"
                          class="py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12"
                        >
                          Verein
                        </th>
                        <th
                          scope="col"
                          class="py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          style="6%"
                        >
                          P
                        </th>
                        <th
                          scope="col"
                          class="py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                          style="6%"
                        >
                          S
                        </th>
                        <th
                          scope="col"
                          class="py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          style="6%"
                        >
                          S
                        </th>
                        <th
                          scope="col"
                          class="py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          style="6%"
                        >
                          U
                        </th>
                        <th
                          scope="col"
                          class="py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          style="6%"
                        >
                          N
                        </th>
                        <th scope="col" class=""></th>

                        <!--<th
                          scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Punkte
                        </th> -->
                        <th
                          v-for="index in 7"
                          :key="index"
                          scope="col"
                          class="w-1/12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          style="white-space: nowrap"
                        >
                          {{ index === 1 ? "Offene Spiele" : "" }}
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr
                        v-for="(team, index) in orderedTeams()"
                        :key="team.TeamId"
                        :class="{ 'bg-orange-100': team.TeamId === 91 }"
                      >
                        <td
                          class="whitespace-nowrap"
                          :class="{
                            'border-green-400 border-l-8': index <= 3,
                            'border-blue-400 border-l-8': index == 4,
                            'border-blue-200 border-l-8': index == 5,
                          }"
                        >
                          <div class="flex items-center">
                            <div
                              v-if="index <= 3"
                              class="text-xxs text-gray-500 tracking-widest"
                              style="writing-mode: vertical-lr"
                            >
                              UCL
                            </div>
                            <div
                              v-else-if="index == 4"
                              class="text-xxs text-gray-500 tracking-widest"
                              style="writing-mode: vertical-lr"
                            >
                              UEL
                            </div>
                            <div
                              v-else-if="index == 5"
                              class="text-xxs text-gray-500 tracking-widest"
                              style="writing-mode: vertical-lr"
                            >
                              UECL
                            </div>
                          </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap w-2">
                          <div class="items-center">
                            <img
                              v-if="team.TeamId !== 1635"
                              style="max-width: 32px; max-height: 32px"
                              :src="team.TeamIconUrl"
                            />
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="items-center">
                            <div class="text-sm font-medium text-gray-900">
                              {{ team.TeamName }}
                            </div>
                            <div class="text-sm text-gray-500">
                              {{ index + 1 }}. Platz
                            </div>
                          </div>
                        </td>

                        <td class="py-4 whitespace-nowrap">
                          <div class="items-center">
                            <div class="text-sm font-bold text-gray-900">
                              {{ team.Points }}
                            </div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="items-center">
                            <div class="text-sm font-medium text-gray-900">
                              {{ team.Played }}
                            </div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="items-center">
                            <div class="text-sm font-medium text-gray-900">
                              {{ team.Wins }}
                            </div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="items-center">
                            <div class="text-sm font-medium text-gray-900">
                              {{ team.Draws }}
                            </div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="items-center">
                            <div class="text-sm font-medium text-gray-900">
                              {{ team.Losses }}
                            </div>
                          </div>
                        </td>
                        <td></td>
                        <!--<td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm text-gray-900 font-medium">
                            {{ team.Points }}
                          </div>
                          <div class="text-sm text-gray-500">Optimization</div>
                        </td> -->
                        <!--<td class="px-6 py-4 whitespace-nowrap"> -->
                        <!-- <div class="max-w-xs rounded-full overflow-hidden shadow-lg relative h-10 w-10">
  <img class="h-10 w-10 object-cover" style="
                                -webkit-filter: grayscale(100%);
                                filter: grayscale(100%);
                              " src="https://upload.wikimedia.org/wikipedia/commons/6/6d/FC_Schalke_04_Logo.svg" alt="Flower and sky"/>
  <div class="absolute top-0 left-1/2" style="transform: translateX(-50%);">
    <h4 class="hover:text-white-700 font-semibold text-red-900 tracking-tight text-3xl">S</h4>
  </div>
</div> -->

                        <!--<div class="flex flex-no-wrap items-center">
                            <div
                              v-for="match in getRemainingMatches(team)"
                              :key="match.MatchID"
                              class="flex-none p-2"
                            >
                              <div
                                class="flex-shrink-0 max-h-9 w-9"
                              >

<div class="flex bg-gray-200">
  <div class="flex-initial text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
    <img v-if="match.Team1.TeamId !== team.TeamId"
                                  :src="match.Team1.TeamIconUrl"
                                  class="object-cover"
                                  alt=""
                                />
                                
                                <img v-else-if="match.Team2.TeamId !== team.TeamId"
                                  :src="match.Team2.TeamIconUrl"
                                  alt=""
                                />
  </div>
  <div class="flex-initial text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
    Medium length
  </div>
</div>

                              </div>
                            </div>
                          </div> -->

                        <!--<div class="flex flex-no-wrap items-center">
                            <div
                              v-for="match in getRemainingMatches(team)"
                              :key="match.MatchID"
                              class="w-28 flex-none"
                            >
                              <div class="grid grid-cols-8 px-1 h-full">
                                <div class="col-span-2 items-center">
                                  <div
                                    class="flex-shrink-0 max-h-9 w-9 items-center"
                                  >
                                    <img
                                      v-if="match.Team1.TeamId !== team.TeamId"
                                      style="max-width: 24px; max-height: 24px"
                                      :src="match.Team1.TeamIconUrl"
                                      alt=""
                                    />

                                    <img
                                      v-else-if="
                                        match.Team2.TeamId !== team.TeamId
                                      "
                                      style="max-width: 24px; max-height: 24px"
                                      :src="match.Team2.TeamIconUrl"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div class="col-span-6" v-for="matchResult in [getRemainingMatchResult(match.MatchID, team)]" :key="matchResult.MatchID">
                                  <span v-if="matchResult.result === -1" title="Noch keine Auswahl"
                                    class="text-sm text-gray-600 font-semibold ml-2 cursor-pointer"
                                    >---</span
                                  >
                                  <span v-else-if="matchResult.result === 0" title="Unentschieden"
                                    class="text-sm text-gray-600 font-semibold ml-2 cursor-pointer"
                                    >U</span
                                  >
                                  <span v-else-if="matchResult.result === 1" :title="'Sieg für '+team.TeamName"
                                    class="text-sm text-green-600 font-semibold ml-2 cursor-pointer"
                                    >S</span
                                  >
                                  <span v-else-if="matchResult.result === 2" :title="'Niederlage für '+team.TeamName"
                                    class="text-sm text-red-600 font-semibold ml-2 cursor-pointer"
                                    >N</span
                                  >
                                </div>
                              </div>
                            </div>
                          </div> -->

                        <!--
                              <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex flex-no-wrap items-center">
                            <div
                              v-for="match in getRemainingMatches(team)"
                              :key="match.MatchID"
                              class="flex-none p-2 bg-red-600"
                            >
                              <div
                                class="flex-shrink-0 max-h-9 w-9 cursor-pointer boxTransitionClickable boxTransition"
                              >
                                <img v-if="match.Team1.TeamId !== team.TeamId"
                                  style="
                                    -webkit-filter: grayscale(100%);
                                    filter: grayscale(100%) opacity(40%);
                                    max-width: 32px; max-height: 32px
                                  "
                                  :src="match.Team1.TeamIconUrl"
                                  class="object-cover"
                                  alt=""
                                />
                                
                                <img v-else-if="match.Team2.TeamId !== team.TeamId"
                                  style="
                                    -webkit-filter: grayscale(100%);
                                    filter: grayscale(100%) opacity(40%);
                                    max-width: 32px; max-height: 32px
                                  "
                                  :src="match.Team2.TeamIconUrl"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                           </td> -->

                        <td
                          align="center"
                          class="py-4 whitespace-nowrap w-1/12 items-center"
                          v-for="remainingMatch in team.remainingMatches"
                          :key="remainingMatch.match.MatchID"
                          :class="{
                            'bg-red-400':
                              remainingMatch.customResult.result === 2,
                            'bg-green-600':
                              remainingMatch.customResult.result === 1,
                            'bg-gray-600':
                              remainingMatch.customResult.result === 0,
                          }"
                        >
                          <div
                            class="flex-none p-2"
                            @click.prevent="
                              setRemainingMatchResult(
                                remainingMatch.matchIndex,
                                remainingMatch.customResult.result,
                                team
                              )
                            "
                          >
                            <img
                              v-if="
                                remainingMatch.match.Team1.TeamId !==
                                team.TeamId
                              "
                              style="max-width: 32px; max-height: 32px"
                              :src="remainingMatch.match.Team1.TeamIconUrl"
                              class="boxTransition cursor-pointer"
                            />
                            <img
                              v-else-if="
                                remainingMatch.match.Team2.TeamId !==
                                team.TeamId
                              "
                              style="max-width: 32px; max-height: 32px"
                              :src="remainingMatch.match.Team2.TeamIconUrl"
                              class="boxTransition cursor-pointer"
                            />
                          </div>
                        </td>

                        <!--<div class="col-span-6" v-for="matchResult in [getRemainingMatchResult(match.MatchID, team)]" :key="matchResult.MatchID">
                                  <span v-if="matchResult.result === -1" title="Noch keine Auswahl"
                                    class="text-sm text-gray-600 font-semibold ml-2 cursor-pointer"
                                    >---</span
                                  >
                                  <span v-else-if="matchResult.result === 0" title="Unentschieden"
                                    class="text-sm text-gray-600 font-semibold ml-2 cursor-pointer"
                                    >U</span
                                  >
                                  <span v-else-if="matchResult.result === 1" :title="'Sieg für '+team.TeamName"
                                    class="text-sm text-green-600 font-semibold ml-2 cursor-pointer"
                                    >S</span
                                  >
                                  <span v-else-if="matchResult.result === 2" :title="'Niederlage für '+team.TeamName"
                                    class="text-sm text-red-600 font-semibold ml-2 cursor-pointer"
                                    >N</span
                                  >
                                </div> -->

                        <!--<div
                            class="flex-shrink-0 h-10 w-10 rounded-full border-4 border-red-600"
                          >                                <span class="text-xxs text-green-600">Sieg</span>

                            <img
                              style="
                                -webkit-filter: grayscale(100%);
                                filter: grayscale(100%);
                              "
                              src="https://upload.wikimedia.org/wikipedia/commons/6/6d/FC_Schalke_04_Logo.svg"
                              alt=""
                            />
                          </div>
                          <div
                            class="flex-shrink-0 h-10 w-10 rounded-full border-4 border-green-600"
                          >
                            <img
                              style="
                                -webkit-filter: grayscale(100%);
                                filter: grayscale(100%);
                              "
                              src="https://upload.wikimedia.org/wikipedia/commons/6/6d/FC_Schalke_04_Logo.svg"
                              alt=""
                            />
                          </div>

                          <div
                            class="flex-shrink-0 h-10 w-10 rounded-full border-4 border-gray-600"
                          >
                            <img
                              style="
                                -webkit-filter: grayscale(100%);
                                filter: grayscale(100%);
                              "
                              src="https://upload.wikimedia.org/wikipedia/commons/6/6d/FC_Schalke_04_Logo.svg"
                              alt=""
                            />
                          </div> -->
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Calculator",
  data() {
    return {
      matches: [
        {
          MatchID: Number,
          MatchDateTime: Date,
          TimeZoneID: String,
          LeagueId: Number,
          LeagueName: String,
          MatchDateTimeUTC: Date,
          Group: {
            GroupName: String,
            GroupOrderID: Number,
            GroupID: Number,
          },
          Team1: {
            TeamId: Number,
            TeamName: String,
            ShortName: String,
            TeamIconUrl: String,
            TeamGroupName: null,
          },
          Team2: {
            TeamId: Number,
            TeamName: String,
            ShortName: String,
            TeamIconUrl: String,
            TeamGroupName: null,
          },
          LastUpdateDateTime: Date,
          MatchIsFinished: Boolean,
          MatchResults: [
            {
              ResultID: Number,
              ResultName: String, //Halbzeit | Endergebnis
              PointsTeam1: Number,
              PointsTeam2: Number,
              ResultOrderID: Number,
              ResultTypeID: Number,
              ResultDescription: String,
            },
          ],
          CustomResult: Number, //0 Unentschieden | 1: Team1 Sieg | 2: Team2 Sieg
          Goals: [
            {
              GoalID: Number,
              ScoreTeam1: Number,
              ScoreTeam2: Number,
              MatchMinute: Number,
              GoalGetterID: Number,
              GoalGetterName: String,
              IsPenalty: Boolean,
              IsOwnGoal: Boolean,
              IsOvertime: Boolean,
              Comment: null,
            },
          ],
          Location: {
            LocationID: Number,
            LocationCity: String,
            LocationStadium: String,
          },
          NumberOfViewers: null,
        },
      ],
      teams: [
        {
          TeamId: Number,
          TeamName: String,
          ShortName: String,
          TeamIconUrl: String,
          TeamGroupName: null,
          Points: 0,
          Played: 0,
          Wins: 0,
          Losses: 0,
          Draws: 0,
        },
      ],
      loading: true,
    };
  },
  /*props: {
    msg: String,
  }, */
  watch: {
    matches: function () {
      console.log("WATCHER");

      this.calculateTeamResults();
    },
  },
  methods: {
    orderedTeams: function () {
      let teams = this.teams.slice().map((team) => {
        team.remainingMatches = this.getRemainingMatches(team);
        return team;
      });

      //console.log("orderedTeams");

      return teams.sort(function (a, b) {
        return parseFloat(b.Points) - parseFloat(a.Points);
      });
    },
    getTeamIcon: function (TeamIconUrl) {
      //unnötig
      if (
        !TeamIconUrl ||
        (typeof TeamIconUrl === "string" && !TeamIconUrl.includes(".png"))
      ) {
        return TeamIconUrl + ".png";
      } else {
        return TeamIconUrl;
      }
    },
    setRemainingMatchResult: function (matchIndex, currentResult, team) {
      let matches2 = this.matches;
      let match = this.matches[matchIndex];

      let result = -1;

      if (currentResult === -1) {
        if (match.Team1.TeamId === team.TeamId) {
          result = 1;
        } else {
          result = 2;
        }
      } else if (currentResult === 1) {
        if (match.Team1.TeamId === team.TeamId) {
          result = 2;
        } else {
          result = 1;
        }
      } else if (currentResult === 2) {
        result = 0;
      } else if (currentResult === 0) {
        result = -1;
      }

      //alert(this.matches[matchIndex].CustomResult === result);
      matches2[matchIndex].CustomResult = result;
      //alert(this.matches === matches2);
      this.matches = [];
      this.matches = matches2;
      //this.$forceUpdate();
      console.log(
        "done " +
          result +
          " " +
          matchIndex +
          " " +
          this.matches[matchIndex].MatchID
      );

      this.calculateTeamResults();
    },
    getRemainingMatchResult: function (matchIndex, team) {
      const match = this.matches[matchIndex];

      let result = -1;

      if (match.CustomResult === 0) {
        result = 0; //Unentschieden
      } else if (match.CustomResult == 1) {
        if (match.Team1.TeamId === team.TeamId) {
          result = 1; //gewonnen
        } else {
          result = 2; //verloren
        }
      } else if (match.CustomResult == 2) {
        if (match.Team1.TeamId === team.TeamId) {
          result = 2; //verloren
        } else {
          result = 1; //gewonnen
        }
      }

      return { result }; // -1 nichts ausgewählt | 0 Unentschieden | 1 Sieg | Niederlage
    },
    getRemainingMatches: function (team) {
      let remainingMatches = [];

      this.matches.forEach((match, index) => {
        if (
          match.Team1.TeamId === team.TeamId ||
          match.Team2.TeamId === team.TeamId
        ) {
          if (!match.MatchIsFinished) {
            remainingMatches.push({
              match,
              customResult: this.getRemainingMatchResult(index, team),
              matchIndex: index,
            });
          }
        }
      });

      return remainingMatches;
    },
    calculateTeamResults: function () {
      console.log("start calc");
      this.teams.forEach((team) => {
        team.Draws = 0;
        team.Played = 0;
        team.Points = 0;
        team.Losses = 0;
        team.Wins = 0;

        this.matches.forEach((match, index) => {
          if (
            match.Team1.TeamId === team.TeamId ||
            match.Team2.TeamId === team.TeamId
          ) {
            if (match.MatchIsFinished) {
              const result = this.getMacthResult(match);
              //console.log("Result");

              if (result === 0) {
                team.Draws++;
                team.Played++;
                team.Points++;
              } else if (result === 1) {
                if (match.Team1.TeamId === team.TeamId) {
                  team.Wins++;
                  team.Played++;
                  team.Points += 3;
                } else {
                  team.Losses++;
                  team.Played++;
                }
              } else if (result === 2) {
                if (match.Team2.TeamId === team.TeamId) {
                  team.Wins++;
                  team.Played++;
                  team.Points += 3;
                } else {
                  team.Losses++;
                  team.Played++;
                }
              }
            } else {
              const result = this.getRemainingMatchResult(index, team).result;
              if (result === 0) {
                team.Draws++;
                team.Played++;
                team.Points++;
              } else if (result === 1) {
                team.Wins++;
                team.Played++;
                team.Points += 3;
              } else if (result === 2) {
                team.Losses++;
                team.Played++;
              }
            }
          }
        });
      });
    },
    getMacthResult: function (match) {
      let result = -1;
      if (match.MatchIsFinished) {
        match.MatchResults.forEach((MatchResult) => {
          if (MatchResult.ResultName === "Endergebnis") {
            if (MatchResult.PointsTeam1 === MatchResult.PointsTeam2) {
              result = 0; //Unentschieden
            } else if (MatchResult.PointsTeam1 > MatchResult.PointsTeam2) {
              result = 1; //Team1 hat gewonnen
            } else if (MatchResult.PointsTeam1 < MatchResult.PointsTeam2) {
              result = 2; //Team2 hat gewonnen
            }
          }
        });
      }

      return result; // -1 fehler | 0 Unentschieden | 1 Team1 hat gewonnen | Team2 hat gewonnen
    },
  },
  async mounted() {
    const matchesResponse = await axios.get(
      `https://www.openligadb.de/api/getmatchdata/bl1/2020`
    );
    matchesResponse.data.map((match) => {
      match.CustomResult = -1;
      return match;
    });
    this.matches = matchesResponse.data;

    const teamsResponse = await axios.get(
      `https://www.openligadb.de/api/getavailableteams/bl1/2020`
    );
    teamsResponse.data.map((team) => {
      team.Points = 0;
      team.Played = 0;
      team.Wins = 0;
      team.Losses = 0;
      team.Draws = 0;
      return team;
    });
    this.teams = teamsResponse.data;

    this.loading = false;
    this.calculateTeamResults();
  },
};
</script>
<style>
.boxTransitionClickable:active {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.07);
}

.boxTransition:hover {
  -webkit-transform: translateY(-0.175rem);
  transform: translateY(-0.175rem);
  box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.15);
}

.boxTransition {
  transition: box-shadow 0.12s ease-out, -webkit-transform 0.12s ease-out;
  transition: transform 0.12s ease-out, box-shadow 0.12s ease-out;
  transition: transform 0.12s ease-out, box-shadow 0.12s ease-out,
    -webkit-transform 0.12s ease-out;
}
</style>
