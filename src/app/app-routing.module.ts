import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    // redirectTo: 'blog'
    loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogPageModule)
  },
  // {
  //   path: 'blog',
  //   loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogPageModule)
  // },
  {
    path: ':id',
    loadChildren: () => import('./pages/blog/post/post.module').then(m => m.PostPageModule)
  }
  // {
  //   path: 'blog/:id',
  //   loadChildren: () => import('./pages/blog/post/post.module').then(m => m.PostPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
