<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div>
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">
          SGE Saison Kalkulator
        </h1>
        <h1 class="text-base font-normal text-gray-900">
          Klicke in der Spalte 'Offene Spiele' Begegnungen an, um die Änderungen
          in der Tabelle zu sehen. Tore werden nicht berücksichtigt. Aktuell werden die ersten 7 Spiele angezeigt
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
                          class="py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                          style="6%"
                        >
                          P
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
                        <th
                          v-for="index in 7"
                          :key="index"
                          scope="col"
                          class="w-1/12 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                          style="white-space: nowrap"
                        >
                          {{ index === 1 ? "Offene Spiele" : "" }}
                        </th>
                      </tr>
                    </thead>
                    <tbody
                      class="bg-white divide-y divide-gray-200"
                      v-if="loading"
                    >
                      <tr v-for="index in 18" :key="index">
                        <td></td>

                        <td class="px-6 py-4 whitespace-nowrap w-2">
                          <div class="items-center">
                            <div
                              class="bg-gray-400 rounded"
                              style="width: 32px; height: 32px"
                            ></div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="items-center">
                            <div
                              class="bg-gray-400 rounded w-3/4"
                              style="height: 14px"
                            ></div>
                            <div
                              class="bg-gray-400 rounded w-3/4 mt-1"
                              style="height: 14px"
                            ></div>
                          </div>
                        </td>

                        <td class="py-4 whitespace-nowrap">
                          <div class="items-center">
                            <div
                              class="bg-gray-400 w-1/3"
                              style="height: 14px"
                            ></div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="items-center">
                            <div
                              class="bg-gray-400 w-1/3"
                              style="height: 14px"
                            ></div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="items-center">
                            <div
                              class="bg-gray-400 w-1/3"
                              style="height: 14px"
                            ></div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="items-center">
                            <div
                              class="bg-gray-400 w-1/3"
                              style="height: 14px"
                            ></div>
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="items-center">
                            <div
                              class="bg-gray-400 w-1/3"
                              style="height: 14px"
                            ></div>
                          </div>
                        </td>
                        <td></td>
                        <td
                          v-for="index in 7"
                          :key="index"
                          align="center"
                          class="py-4 whitespace-nowrap w-1/12 items-center"
                        >
                          <div
                            class="bg-gray-400 rounded"
                            style="width: 32px; height: 32px"
                          ></div>
                        </td>
                      </tr>
                    </tbody>
                    <tbody v-else class="bg-white divide-y divide-gray-200">
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
                            'border-blue-200 border-l-8': index == 5,
                            'border-orange-400 border-l-8': index == 15,
                            'border-red-600 border-l-8': index >= 16,
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
                            <span
                              v-else
                              class="font-bold ml-1"
                              style="font-size: 32px"
                              >L</span
                            >
                          </div>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                          <div class="items-center">
                            <div class="text-sm font-medium text-gray-900">
                              {{ team.TeamName }}
                            </div>
                            <div class="text-sm text-gray-500 font-semibold">
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

                        <td
                          align="center"
                          class="py-4 whitespace-nowrap w-1/12 items-center"
                          v-for="(remainingMatch) in team.remainingMatches"
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
                            v-if="!remainingMatch.match.MatchIsFinished"
                            class="flex-none p-2"
                            @click.prevent="
                              setRemainingMatchResult(
                                remainingMatch.matchIndex,
                                remainingMatch.customResult.result,
                                team
                              )
                            "
                          >
                            <span
                              v-if="
                                remainingMatch.match.Team1.TeamId !==
                                  team.TeamId &&
                                remainingMatch.match.Team1.TeamId === 1635
                              "
                              class="boxTransition cursor-pointer font-bold"
                              style="font-size: 32px"
                              >L</span
                            >
                            <span
                              v-else-if="
                                remainingMatch.match.Team2.TeamId !==
                                  team.TeamId &&
                                remainingMatch.match.Team2.TeamId === 1635
                              "
                              class="boxTransition cursor-pointer font-bold"
                              style="font-size: 32px"
                              >L</span
                            >
                            <img
                              v-else-if="
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

    <footer
      class="px-3 py-8 bg-white dark:bg-gray-800 text-2 text-gray-500 dark:text-gray-200 transition-colors duration-200 shadow"
    >
      <div class="flex flex-col">
        <div class="md:hidden mt-7 mx-auto w-11 h-px rounded-full"></div>
        <div class="mt-4 md:mt-0 flex flex-col md:flex-row">
          <nav
            class="flex-1 flex flex-col items-center justify-center md:items-end md:border-r border-gray-100 md:pr-5"
          >
            <span class="">Daten von </span>
            <span class="mt-7 md:mt-1">
              <a
                class="underline hover:text-primary-gray-20"
                href="https://www.openligadb.de/"
                target="_blank"
              >
                OpenLigaDB
              </a>
            </span>
          </nav>
          <div class="md:hidden mt-4 mx-auto w-11 h-px rounded-full"></div>
          <div
            class="mt-4 md:mt-0 flex-1 flex items-center justify-center md:border-r border-gray-100"
          >
            <a
              class="hover:text-primary-gray-20"
              href="https://twitter.com/54m11r"
              target="_blank"
            >
              <span class="sr-only"> Twitter </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                viewBox="0 0 1792 1792"
              >
                <path
                  d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"
                ></path>
              </svg>
            </a>
          </div>
          <div class="md:hidden mt-4 mx-auto w-11 h-px rounded-full"></div>
          <div
            class="mt-7 md:mt-0 flex-1 flex flex-col items-center justify-center md:items-start md:pl-5"
          >
            <span class=""> © 2021 </span>
            <span class="mt-7 md:mt-1">
              Entwickelt von
              <a
                class="underline hover:text-primary-gray-20"
                href="https://github.com/54m1r"
                target="_blank"
              >
                54m1r
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
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
      maxRemainingMatchesCount: 0,
    };
  },
  /*props: {
    msg: String,
  }, */
  /*watch: {
    matches: function () {
      console.log("WATCHER");

      this.calculateTeamResults();
    },
  }, */
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
      //let matches2 = this.matches;
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
      this.matches[matchIndex].CustomResult = result;
      //alert(this.matches === matches2);
      //this.matches = [];
      //this.matches = matches2;
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
      let teamMatches = this.matches.map((match, index) => {
        match.index = index;
        return match;
      });

      teamMatches = teamMatches.filter((match) => {
        return (
          match.Team1.TeamId === team.TeamId ||
          match.Team2.TeamId === team.TeamId
        );
      });
      //console.log(teamMatches);

      let remainingMatches = [];

      teamMatches
        .slice(
          teamMatches.length - this.maxRemainingMatchesCount,
          teamMatches.length
        )
        .forEach((match) => {
          if (
            match.Team1.TeamId === team.TeamId ||
            match.Team2.TeamId === team.TeamId
          ) {
            //if (!match.MatchIsFinished) {
            remainingMatches.push({
              match,
              customResult: this.getRemainingMatchResult(match.index, team),
              matchIndex: match.index,
            });
            //}
          }
        });

      return remainingMatches.slice(0, -27);
    },
    getRemainingMatchesCountForTeam: function (team) {
      let count = 0;

      this.matches.forEach((match) => {
        if (
          match.Team1.TeamId === team.TeamId ||
          match.Team2.TeamId === team.TeamId
        ) {
          if (!match.MatchIsFinished) {
            count++;
          }
        }
      });

      return count;
    },
    getMaxRemainingMatchesCount: function () {
      let maxCount = 0;

      this.teams.forEach((team) => {
        let count = this.getRemainingMatchesCountForTeam(team);
        if (count > maxCount) {
          maxCount = count;
        }
      });

      return maxCount;
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
      `https://www.openligadb.de/api/getmatchdata/bl1/2021`
    );
    matchesResponse.data.map((match) => {
      match.CustomResult = -1;
      return match;
    });
    this.matches = matchesResponse.data;

    const teamsResponse = await axios.get(
      `https://www.openligadb.de/api/getavailableteams/bl1/2021`
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

    this.maxRemainingMatchesCount = this.getMaxRemainingMatchesCount();

    setTimeout(() => {
      this.loading = false;
    }, 850);
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
  -webkit-transform: translateY(-0.375rem);
  transform: translateY(-0.375rem);
}

.boxTransition {
  transition: box-shadow 0.12s ease-out, -webkit-transform 0.12s ease-out;
  transition: transform 0.12s ease-out, box-shadow 0.12s ease-out;
  transition: transform 0.12s ease-out, box-shadow 0.12s ease-out,
    -webkit-transform 0.12s ease-out;
}
</style>
