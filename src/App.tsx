import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/cart/CartDrawer';
import { SearchModal } from './components/search/SearchModal';
import { HomeView } from './views/HomeView';
import { CollectionView } from './views/CollectionView';
import { ProductDetailView } from './views/ProductDetailView';
import { ProfilerView } from './views/ProfilerView';
import { AtelierView } from './views/AtelierView';
import { ConciergeView } from './views/ConciergeView';
import { CheckoutView } from './views/CheckoutView';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'collection' | 'pdp' | 'profiler' | 'atelier' | 'concierge' | 'checkout'>('home');
  const [selectedProductSlug, setSelectedProductSlug] = useState<string>('giallo-corsa-extrait');
  const [searchOpen, setSearchOpen] = useState(false);

  // URL Hash Sync for bookmarking and browser back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) {
        setCurrentView('home');
        return;
      }
      const [view, param] = hash.split('/');
      if (['home', 'collection', 'pdp', 'profiler', 'atelier', 'concierge', 'checkout'].includes(view)) {
        setCurrentView(view as any);
        if (view === 'pdp' && param) {
          setSelectedProductSlug(param);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial load
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view: string, param?: string) => {
    if (view === 'pdp' && param) {
      setSelectedProductSlug(param);
      window.location.hash = `pdp/${param}`;
      setCurrentView('pdp');
    } else {
      window.location.hash = view === 'home' ? '' : view;
      setCurrentView(view as any);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#202020] text-[#ffffff] flex flex-col selection:bg-[#ffc000] selection:text-[#000000]">
      {/* Accessible Skip-To-Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-[#ffc000] focus:text-[#000000] focus:px-4 focus:py-2 focus:font-lambo focus:text-[14px]"
      >
        SKIP TO MAIN CONTENT
      </a>

      {/* Top Bar Navigation (64px #202020) */}
      <Navbar
        currentView={currentView}
        onNavigate={navigateTo}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Main Dynamic Viewport */}
      <main id="main-content" className="flex-1 w-full">
        {currentView === 'home' && (
          <HomeView onNavigate={navigateTo} />
        )}

        {currentView === 'collection' && (
          <CollectionView
            onNavigateProduct={(slug) => navigateTo('pdp', slug)}
          />
        )}

        {currentView === 'pdp' && (
          <ProductDetailView
            slug={selectedProductSlug}
            onNavigate={navigateTo}
          />
        )}

        {currentView === 'profiler' && (
          <ProfilerView
            onNavigateProduct={(slug) => navigateTo('pdp', slug)}
          />
        )}

        {currentView === 'atelier' && (
          <AtelierView onNavigate={navigateTo} />
        )}

        {currentView === 'concierge' && (
          <ConciergeView />
        )}

        {currentView === 'checkout' && (
          <CheckoutView
            onBackToShop={() => navigateTo('collection')}
            onNavigateHome={() => navigateTo('home')}
          />
        )}
      </main>

      {/* Slide-Over Bag Drawer */}
      <CartDrawer
        onCheckout={() => navigateTo('checkout')}
        onNavigateProduct={(slug) => navigateTo('pdp', slug)}
      />

      {/* Scent Search Overlay */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectProduct={(slug) => {
          setSearchOpen(false);
          navigateTo('pdp', slug);
        }}
      />

      {/* Deep Dark Stage Footer */}
      {currentView !== 'checkout' && (
        <Footer onNavigate={navigateTo} />
      )}
    </div>
  );
}
