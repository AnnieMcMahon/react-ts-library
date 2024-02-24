import type { Meta, StoryObj } from '@storybook/react';

import Card from './Card';

const cardSample = {
  id: 1,
  title: "Card Example",
  image: "https://t3.ftcdn.net/jpg/06/87/01/34/360_F_687013418_Wbm9eiBzy29qVg8vMzsT7JYvnLkmD8zR.jpg",
  technology: "HTML, CSS, JavaScript",
  summary: "This is an example of what a project card would look like.",
  gitHubLink: "https://github.com/",
  gitHubTitle: "GitHub",
  webPageLink: "https://github/",
  webPageTitle: "GitHub"
}

const cardAnnie = {
  id: 2,
  title: "Minimal Reddit",
  image: "https://portfolio-v3-flame.vercel.app/images/reddit.png",
  technology: "HTML, CSS, JavaScript, React/Redux",
  summary: "The application allows users to view and search posts and comments provided by the Reddit API. This project was developed by Annie McMahon.",
  gitHubLink: "https://github.com/AnnieMcMahon/minimal-reddit",
  gitHubTitle: "AnnieMcMahon/minimal-reddit",
  webPageLink: "https://minimal-reddit-annie.netlify.app/",
  webPageTitle: "minimal-reddit-annie"
}

const cardJuan = {
  id: 3,
  title: "Juan Diaz's Documentation Site",
  image: "https://www.jpdiaz.dev/_astro/docs.050764e2_1BgwcT.png",
  technology: "Jekyll, Ruby, SASS",
  summary: "This is Juan Diaz's documentation site for projects, tech notes, and career advancement.",
  gitHubLink: "https://github.com/JuanPabloDiaz/doc",
  gitHubTitle: "JuanPabloDiaz/docs",
  webPageLink: "https://docs.jpdiaz.dev/",
  webPageTitle: "docs.jpdiaz.dev"
}

const cardLee = {
  id: 4,
  title: "Write a Bad Song",
  image: "https://www.leedyer.com/assets/wabsScreenShot.png",
  technology: "HTML, CSS, JavaScript",
  summary: "This is A social Media website based around songwriting that encourages quantity over quality, and promotes collaboration. This project was developed by Lee Robert Dyer.",
  gitHubLink: "https://github.com/leerobertdyer/wabs",
  gitHubTitle: "leerobertdyer/wabs",
  webPageLink: "https://writeabadsong.com/",
  webPageTitle: "writeabadsong.com"
}

const meta = {
  title: 'Card',
  component: Card
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardSample: Story = {
  args: {
    card: cardSample
  }
};

export const CardAnnie: Story = {
  args: {
    card: cardAnnie
  }
};

export const CardJuan: Story = {
  args: {
    card: cardJuan
  }
};

export const CardLee: Story = {
  args: {
    card: cardLee
  }
};



