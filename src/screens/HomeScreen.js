import React from 'react';

import Appointment from '../components/Home/Appointment';
import BookAndConsult from '../components/Home/BookAndConsult';
import Categories from '../components/Home/Categories';
import SearchComponent from '../components/Home/SearchComponent';
import Slogan from '../components/Home/Slogan';
import CommonScreen from './CommonScreen';

const HomeScreen = () => {
  return (
    <CommonScreen>
      <SearchComponent />
      <Appointment />
      <Slogan />
      <Categories />
      <BookAndConsult />
    </CommonScreen>
  );
};

export default HomeScreen;
