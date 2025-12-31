'use client';

import { useState } from 'react';
import { FaPrint, FaDownload, FaShare, FaTimes } from 'react-icons/fa';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

 const ActionButtons = () => {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true);
    try {
      // Get the main content area, excluding action buttons
      const element = document.querySelector('main');
      if (!element) return;

      const canvas = await html2canvas(element as HTMLElement, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('portfolio.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Portfolio',
          text: 'Check out my portfolio!',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      setShowShareMenu(!showShareMenu);
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
    setShowShareMenu(false);
  };

  const shareOnSocial = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Check out my portfolio!');
    let shareUrl = '';

    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${text}%20${url}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
      setShowShareMenu(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4 no-print">
        <button
          onClick={handlePrint}
          className="bg-gradient-to-br from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-indigo-500/50 flex items-center justify-center group"
          title="Print"
        >
          <FaPrint size={20} className="group-hover:rotate-12 transition-transform" />
        </button>
        
        <button
          onClick={handleDownloadPDF}
          disabled={isGeneratingPDF}
          className="bg-gradient-to-br from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 disabled:from-emerald-400 disabled:to-emerald-500 disabled:cursor-not-allowed text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-emerald-500/50 flex items-center justify-center group"
          title="Download PDF"
        >
          {isGeneratingPDF ? (
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
          ) : (
            <FaDownload size={20} className="group-hover:translate-y-1 transition-transform" />
          )}
        </button>
        
        <div className="relative">
          <button
            onClick={handleShare}
            className="bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-purple-500/50 flex items-center justify-center group"
            title="Share"
          >
            <FaShare size={20} className="group-hover:rotate-12 transition-transform" />
          </button>
          
          {showShareMenu && (
            <div className="absolute bottom-full right-0 mb-2 glass dark:glass-dark rounded-2xl shadow-2xl p-4 min-w-[220px] border border-white/20 animate-fade-in-up">
              <div className="flex justify-between items-center mb-3 pb-3 border-b border-slate-200 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-white text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Share Portfolio</h3>
                <button
                  onClick={() => setShowShareMenu(false)}
                  className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="space-y-2">
                <button
                  onClick={copyLink}
                  className="w-full text-left px-4 py-2.5 rounded-lg hover:bg-white/50 dark:hover:bg-slate-700/50 text-slate-700 dark:text-slate-200 transition-all duration-200 hover:translate-x-1"
                >
                  Copy Link
                </button>
                <button
                  onClick={() => shareOnSocial('linkedin')}
                  className="w-full text-left px-4 py-2.5 rounded-lg hover:bg-white/50 dark:hover:bg-slate-700/50 text-slate-700 dark:text-slate-200 transition-all duration-200 hover:translate-x-1"
                >
                  Share on LinkedIn
                </button>
                <button
                  onClick={() => shareOnSocial('twitter')}
                  className="w-full text-left px-4 py-2.5 rounded-lg hover:bg-white/50 dark:hover:bg-slate-700/50 text-slate-700 dark:text-slate-200 transition-all duration-200 hover:translate-x-1"
                >
                  Share on Twitter
                </button>
                <button
                  onClick={() => shareOnSocial('facebook')}
                  className="w-full text-left px-4 py-2.5 rounded-lg hover:bg-white/50 dark:hover:bg-slate-700/50 text-slate-700 dark:text-slate-200 transition-all duration-200 hover:translate-x-1"
                >
                  Share on Facebook
                </button>
                <button
                  onClick={() => shareOnSocial('whatsapp')}
                  className="w-full text-left px-4 py-2.5 rounded-lg hover:bg-white/50 dark:hover:bg-slate-700/50 text-slate-700 dark:text-slate-200 transition-all duration-200 hover:translate-x-1"
                >
                  Share on WhatsApp
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ActionButtons;
