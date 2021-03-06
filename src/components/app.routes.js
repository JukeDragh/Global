import { provideRouter } from '@angular/router';

import { PlayersComponent }  from './players/players.component.js';
import { PlayerComponent } from './player/player.component';
import { PetsComponent } from './pets/pets.component';
import { PetComponent } from './pet/pet.component';
import { GuildsComponent } from './guilds/guilds.component';
import { GuildComponent } from './guild/guild.component';
import { MapsComponent } from './maps/maps.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { StatisticsComponent } from './statistics/statistics.component';

export const routes = [
  { path: '',                 redirectTo: 'players', pathMatch: 'full' },
  { path: 'players',          component: PlayersComponent },
  { path: 'players/:name',    component: PlayerComponent },
  { path: 'pets',             component: PetsComponent },
  { path: 'pets/:name',       component: PetComponent },
  { path: 'guilds',           component: GuildsComponent },
  { path: 'guilds/:name',     component: GuildComponent },
  { path: 'maps',             component: MapsComponent },
  { path: 'leaderboard',      component: LeaderboardComponent },
  { path: 'statistics',       component: StatisticsComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];