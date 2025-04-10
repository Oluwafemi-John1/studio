
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Newspaper, User, Flame } from "lucide-react";

const news = [
  {
    title: "CYON Elects New President",
    content: "The Catholic Youth Organization has elected a new president...",
    date: "2024-07-22",
  },
  {
    title: "National Youth Day Celebration",
    content: "Join us for the National Youth Day celebration...",
    date: "2024-07-29",
  },
];

const trendingNews = [
  {
    title: "Pope Francis Calls for Peace",
    content: "Pope Francis has made a new call for peace in...",
    date: "2024-07-23",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <section className="mb-8">
        <FaceOfWeek />
      </section>

      <section className="mb-8">
        <NewsFeed news={news} />
      </section>

      <section className="mb-8">
        <TrendingNews trendingNews={trendingNews} />
      </section>
    </div>
  );
}

function FaceOfWeek() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Face of the Week</CardTitle>
        <CardDescription>Celebrating outstanding contributions</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <img
          src="https://picsum.photos/200/200"
          alt="Profile"
          className="rounded-full w-32 h-32 object-cover shadow-md"
        />
        <div className="space-y-1">
          <p className="text-lg font-semibold">John Doe</p>
          <p className="text-sm text-muted-foreground">
            Awarded for outstanding community service
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

function NewsFeed({ news }: { news: any[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Newspaper className="mr-2 h-4 w-4" />
          News Feed
        </CardTitle>
        <CardDescription>Stay updated with the latest news</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {news.map((item, index) => (
          <div key={index} className="border-b pb-2 last:border-none">
            <h3 className="text-md font-semibold">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.content}</p>
            <Badge className="mt-2">{item.date}</Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function TrendingNews({ trendingNews }: { trendingNews: any[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Flame className="mr-2 h-4 w-4" />
          Trending News
        </CardTitle>
        <CardDescription>Top stories in the Catholic community</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {trendingNews.map((item, index) => (
          <div key={index} className="border-b pb-2 last:border-none">
            <h3 className="text-md font-semibold">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.content}</p>
            <Badge className="mt-2">{item.date}</Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
