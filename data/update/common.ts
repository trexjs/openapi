type CommonSchema = {
  name: string;
  category: string[];
  description: string;
  address: string;
  contact_details: {
    phone: number;
    email: string;
    links: string[];
  };
  media: {
    pictures: [];
    videos: [];
  };
};
