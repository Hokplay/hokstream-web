import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from 'react-router-dom';

import { RoutePath } from '@/ui/route/RoutePath.ts';
import MainLayout from '@/shared/ui/layout/MainLayout.tsx';

function Routes() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          path: RoutePath.Home,
          async lazy() {
            const { default: HomeView } = await import(
              '@/ui/home/view/Home.view.tsx'
            );

            return {
              element: <HomeView />
            };
          }
        },
        {
          path: RoutePath.Intro,
          async lazy() {
            const { default: IntroductionView } = await import(
              '@/ui/introduction/view/Introduction.view.tsx'
            );

            return {
              element: <IntroductionView />
            };
          }
        },
        {
          path: RoutePath.Cases,
          async lazy() {
            const { default: CaseStudyView } = await import(
              '@/ui/caseStudy/view/CaseStudy.view.tsx'
            );

            return {
              element: <CaseStudyView />
            };
          }
        },
        {
          path: RoutePath.Features,
          async lazy() {
            const { default: FeatureView } = await import(
              '@/ui/feature/view/Feature.view.tsx'
            );

            return {
              element: <FeatureView />
            };
          }
        },
        {
          path: RoutePath.About,
          async lazy() {
            const { default: AboutUsView } = await import(
              '@/ui/aboutUs/view/AboutUs.view.tsx'
            );

            return {
              element: <AboutUsView />
            };
          }
        },
        {
          path: RoutePath.PrivacyPolicy,
          async lazy() {
            const { default: PrivacyPolicyView } = await import(
              '@/ui/privacyPolicy/view/PrivacyPolicy.view.tsx'
            );

            return {
              element: <PrivacyPolicyView />
            };
          }
        },
        {
          path: RoutePath.TermsOfUse,
          async lazy() {
            const { default: TermsOfUseView } = await import(
              '@/ui/termsOfUse/view/TermsOfUse.view.tsx'
            );

            return {
              element: <TermsOfUseView />
            };
          }
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
