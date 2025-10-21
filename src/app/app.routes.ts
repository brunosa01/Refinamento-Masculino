import { Routes } from '@angular/router';

// Importando todos os nossos componentes de página
import { Home } from './pages/home/home';
import { Promotions } from './pages/promotions/promotions';
import { Content } from './pages/content/content';
import { StyleGuide } from './pages/style-guide/style-guide';
import { PromptGenerator } from './pages/prompt-generator/prompt-generator';

export const routes: Routes = [
    // Rota padrão: quando não há nada na URL, carrega a Home
    { path: '', component: Home },

    // Rota explícita para a home, que redireciona para a rota padrão
    { path: 'home', redirectTo: '', pathMatch: 'full' },

    // Rotas para cada uma das nossas páginas
    { path: 'promotions', component: Promotions },
    { path: 'content', component: Content },
    { path: 'style-guide', component: StyleGuide },
    { path: 'prompt-generator', component: PromptGenerator },

    // Rota coringa: se o usuário digitar uma URL que não existe,
    // ele será redirecionado para a página inicial.
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];