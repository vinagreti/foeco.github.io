import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home'

import { AdminGuardService, CustomerGuardService, DeveloperGuardService, LoggedGuardService, PublicGuardService, StaffGuardService } from './shared/guard/can-activate-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [PublicGuardService] },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: 'blog', loadChildren: './blog/blog.module#BlogModule', canActivate: [LoggedGuardService] },
  { path: 'article', loadChildren: './article/article.module#ArticleModule', canActivate: [LoggedGuardService] },
  { path: 'alternative', loadChildren: './alternative/alternative.module#AlternativeModule' },
  { path: 'feed', loadChildren: './feed/feed.module#FeedModule' },
  { path: 'talent', loadChildren: './talent/talent.module#TalentModule' },
  { path: 'seed', loadChildren: './seed/seed.module#SeedModule' },
  { path: 'image', loadChildren: './image/image.module#ImageModule' },
  { path: 'post', loadChildren: './post/post.module#PostModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfileModule', canActivate: [LoggedGuardService] },
  { path: 'product', loadChildren: './product/product.module#ProductModule' },
  { path: 'question', loadChildren: './question/question.module#QuestionModule' },
  { path: 'map', loadChildren: './map/map.module#MapModule', canActivate: [LoggedGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    LoggedGuardService,
    PublicGuardService
  ]
})
export class AppRoutingModule { }
