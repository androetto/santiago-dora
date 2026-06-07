export type Lang = "es" | "en";

export interface Translations {
  meta: {
    title: string;
    description: string;
    ogImageAlt: string;
    jobTitle: string;
    knowsAbout: string[];
  };
  nav: {
    subtitle: string;
  };
  hero: {
    subtitle: string;
    scrollDown: string;
    download: string;
    audios: { label: string; file: string }[];
  };
  heroVideo: {
    id: string;
    title: string;
    videos: { id: string; title: string }[];
  };
  about: {
    id: string;
    title: string;
    iframeTitle: string;
    paragraphs: string[];
    closing: string;
  };
  logos: {
    id: string;
    title: string;
  };
  demos: {
    id: string;
    title: string;
    subtitle: string;
    items: { title: string; youtubeId: string }[];
  };
  muestra: {
    id: string;
    title: string;
    subtitle: string;
    download: string;
    neutroTitle: string;
    argentinaTitle: string;
    neutroAudios: { file: string; label: string }[];
    argentinaAudios: { file: string; label: string }[];
  };
  work: {
    id: string;
    title: string;
    subtitle: string;
    closeVideo: string;
    videoTitle: string;
    items: {
      role: string;
      project: string;
      type: string;
      image: string;
      videoUrl: string;
    }[];
  };
  contact: {
    id: string;
    title: string;
    intro: string;
    formSubject: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    messagePlaceholder: string;
    messageLabel: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    connectionError: string;
    whatsappUrl: string;
    location: string;
  };
  whatsapp: {
    url: string;
    title: string;
    ariaLabel: string;
  };
  footer: {
    creditSubject: string;
  };
  langSwitcher: {
    label: string;
  };
}
