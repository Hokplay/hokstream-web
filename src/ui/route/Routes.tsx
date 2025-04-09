import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from 'react-router-dom';

import { RoutePath } from '@/ui/route/RoutePath.ts';
import MainLayout from '@/shared/ui/layout/MainLayout.tsx';
import HomeView from '@/ui/home/view/Home.view.tsx';
import IntroductionView from '@/ui/introduction/view/Introduction.view.tsx';
import SuccessCaseView from '@/ui/successCase/view/SuccessCase.view.tsx';
import FeatureView from '@/ui/feature/view/Feature.view.tsx';
import AboutUsView from '@/ui/aboutUs/view/AboutUs.view.tsx';
import PrivacyPolicyView from '@/ui/privacyPolicy/view/PrivacyPolicy.view.tsx';
import TermsOfUseView from '@/ui/termsOfUse/view/TermsOfUse.view.tsx';

function Routes() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          path: RoutePath.Home,
          element: <HomeView />
        },
        {
          path: RoutePath.Intro,
          element: <IntroductionView />
        },
        {
          path: RoutePath.Cases,
          element: <SuccessCaseView />
        },
        {
          path: RoutePath.Features,
          element: <FeatureView />
        },
        {
          path: RoutePath.About,
          element: <AboutUsView />
        },
        {
          path: RoutePath.PrivacyPolicy,
          element: <PrivacyPolicyView />
        },
        {
          path: RoutePath.TermsOfUse,
          element: <TermsOfUseView />
        },
        {
          path: '*',
          element: <Navigate to={RoutePath.Home} />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default Routes;
