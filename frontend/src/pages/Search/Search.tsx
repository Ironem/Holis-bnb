import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import './Search.css';
// import axios from 'axios';

type SearchPageProps = {};

const SearchPage: React.FC<SearchPageProps> = () => {
  const [collections, setCollections] = useState<any[]>([]);
  const [filteredCollections, setFilteredCollections] = useState<any>({});

  // Create a function to fetch all locations from database
  useEffect(() => {
    // axios
    //   .get('locations/')
    //   .then((res) => {
    //     console.log(res);
    //     if (res.data.length > 0) {
    //       setCollections(res.data);
    //     }
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
    const mockCollections = [
      {
        id: 1,
        title: 'Super Hotel',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum maximus cursus. Nunc aliquam arcu est, quis sodales ante elementum euismod. Curabitur faucibus diam ut facilisis tincidunt. Morbi blandit dui et nunc euismod, nec tristique enim facilisis. Duis sagittis mattis neque, vel iaculis risus pulvinar non.',
        location: 'London',
        picture: 'https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_1280.jpg',
        stars: 4,
        numberOfRooms: 2,
        price: 90,
        categoryId: 1,
        category: { id: 1, name: 'hotel', description: 'Un hotel est un lieu génial' }
      },
      {
        id: 2,
        title: 'Super B&B',
        description: 'Une deuxième description possible.',
        location: 'Paris',
        picture: 'https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_1280.jpg',
        stars: 5,
        numberOfRooms: 1,
        price: 105,
        categoryId: 3,
        category: { id: 3, name: 'guesthouse', description: 'Rencontrez des habitants' }
      },
      {
        id: 3,
        title: 'Super Villa',
        description: 'Cette hotel a une description originale',
        location: 'Biarritz',
        picture: 'https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg',
        stars: 4,
        numberOfRooms: 8,
        price: 300,
        categoryId: 4,
        category: {
          id: 4,
          name: 'villa',
          description: 'Si vous cherchez plus grand, vous ne trouverez pas'
        }
      },
      {
        id: 4,
        title: 'Super Appartment',
        description: 'Cette hotel a une description originale',
        location: 'Berlin',
        picture: 'https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416062_1280.jpg',
        stars: 3,
        numberOfRooms: 2,
        price: 150,
        categoryId: 2,
        category: { id: 2, name: 'appartement', description: 'Vous vous sentirez comme chez vous' }
      },
      {
        id: 5,
        title: 'Another Hotel',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum maximus cursus. Nunc aliquam arcu est, quis sodales ante elementum euismod. Curabitur faucibus diam ut facilisis tincidunt. Morbi blandit dui et nunc euismod, nec tristique enim facilisis. Duis sagittis mattis neque, vel iaculis risus pulvinar non.',
        location: 'Paris',
        picture: 'https://cdn.pixabay.com/photo/2012/11/21/10/24/building-66789_1280.jpg',
        stars: 5,
        numberOfRooms: 1,
        price: 100,
        categoryId: 1,
        category: { id: 1, name: 'hotel', description: 'Un hotel est un lieu génial' }
      },
      {
        id: 6,
        title: 'Beautiful Hotel',
        description: 'Une deuxième description possible.',
        location: 'Santiago',
        picture: 'https://cdn.pixabay.com/photo/2019/05/28/00/15/indoors-4234071_1280.jpg',
        stars: 4,
        numberOfRooms: 2,
        price: 50,
        categoryId: 1,
        category: { id: 1, name: 'hotel', description: 'Un hotel est un lieu génial' }
      },
      {
        id: 7,
        title: 'Horrible Hotel',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum maximus cursus. Nunc aliquam arcu est, quis sodales ante elementum euismod. Curabitur faucibus diam ut facilisis tincidunt. Morbi blandit dui et nunc euismod, nec tristique enim facilisis. Duis sagittis mattis neque, vel iaculis risus pulvinar non.',
        location: 'Moon',
        picture: 'https://cdn.pixabay.com/photo/2014/02/08/08/17/architecture-261597_1280.jpg',
        stars: 1,
        numberOfRooms: 1,
        price: 30000,
        categoryId: 1,
        category: { id: 1, name: 'hotel', description: 'Un hotel est un lieu génial' }
      },
      {
        id: 8,
        title: 'Cosy Appartment',
        description: 'Une deuxième description possible.',
        location: 'Lyon',
        picture: 'https://cdn.pixabay.com/photo/2021/11/08/00/30/bedroom-6778193_1280.jpg',
        stars: 4,
        numberOfRooms: 1,
        price: 48,
        categoryId: 2,
        category: { id: 2, name: 'appartement', description: 'Vous vous sentirez comme chez vous' }
      },
      {
        id: 9,
        title: 'Big Appartment',
        description: 'Cette hotel a une description originale',
        location: 'Marseille',
        picture: 'https://cdn.pixabay.com/photo/2020/03/09/23/59/buildings-4917447_1280.jpg',
        stars: 2,
        numberOfRooms: 4,
        price: 147,
        categoryId: 2,
        category: { id: 2, name: 'appartement', description: 'Vous vous sentirez comme chez vous' }
      },
      {
        id: 10,
        title: 'Medium Appartment With a really long title',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum maximus cursus. Nunc aliquam arcu est, quis sodales ante elementum euismod. Curabitur faucibus diam ut facilisis tincidunt. Morbi blandit dui et nunc euismod, nec tristique enim facilisis. Duis sagittis mattis neque, vel iaculis risus pulvinar non.',
        location: 'Saint-Père-Marc-en-Poulet',
        picture:
          'https://cdn.pixabay.com/photo/2017/07/10/08/22/mont-saint-michel-2489345_1280.jpg',
        stars: 5,
        numberOfRooms: 2,
        price: 177,
        categoryId: 2,
        category: { id: 2, name: 'appartement', description: 'Vous vous sentirez comme chez vous' }
      },
      {
        id: 12,
        title: 'Super Hotel',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum maximus cursus. Nunc aliquam arcu est, quis sodales ante elementum euismod. Curabitur faucibus diam ut facilisis tincidunt. Morbi blandit dui et nunc euismod, nec tristique enim facilisis. Duis sagittis mattis neque, vel iaculis risus pulvinar non.',
        location: 'London',
        picture: 'https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_1280.jpg',
        stars: 4,
        numberOfRooms: 2,
        price: 90,
        categoryId: 1,
        category: { id: 1, name: 'hotel', description: 'Un hotel est un lieu génial' }
      },
      {
        id: 11,
        title: 'Super Hotel',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum maximus cursus. Nunc aliquam arcu est, quis sodales ante elementum euismod. Curabitur faucibus diam ut facilisis tincidunt. Morbi blandit dui et nunc euismod, nec tristique enim facilisis. Duis sagittis mattis neque, vel iaculis risus pulvinar non.',
        location: 'London',
        picture: 'https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_1280.jpg',
        stars: 4,
        numberOfRooms: 2,
        price: 12,
        categoryId: 1,
        category: { id: 1, name: 'hotel', description: 'Un hotel est un lieu génial' }
      }
    ];
    setCollections(mockCollections);
  }, []);

  // Create a function to sort locations by categories & by number of rooms
  useEffect(() => {
    const newFilterdCollections: any = {};
    collections.map((collection) => {
      const existCategories = Object.keys(newFilterdCollections);
      if (existCategories.includes(collection.category.name)) {
        // TODO change id to name
        const existNumberRoom = Object.keys(newFilterdCollections[collection.category.name]);
        if (existNumberRoom.includes(collection.numberOfRooms)) {
          newFilterdCollections[collection.category.name][collection.numberOfRooms].push(
            collection
          );
        } else {
          newFilterdCollections[collection.category.name][collection.numberOfRooms] = collection;
        }
      } else {
        const numberOfRoomsObj: any = {};
        numberOfRoomsObj[collection.numberOfRooms] = collection;
        newFilterdCollections[collection.category.name] = numberOfRoomsObj;
      }
    });
    setFilteredCollections({ ...newFilterdCollections });
  }, [collections]);

  // Create a search function linked to the search input in the header
  const renderCollections: ReactNode = useMemo(() => {
    const categories = Object.keys(filteredCollections);
    const collectionCards = categories.map((category, key) => <h3 key={key}>{category}</h3>);
    return collectionCards;
  }, [filteredCollections]);

  return (
    <div className="search">
      {/* List of sorted locations card */}
      {renderCollections}
    </div>
  );
};

export default SearchPage;
