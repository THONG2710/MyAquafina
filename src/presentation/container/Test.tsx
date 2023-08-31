import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel';

interface Slide {
    title: string;
    description: string;
  }

  const slides: Slide[] = [
    {
      title: 'Slide 1',
      description: 'This is the first slide',
    },
    {
      title: 'Slide 2',
      description: 'This is the second slide',
    },
    {
      title: 'Slide 3',
      description: 'This is the third slide',
    },
  ];
  

const Test:React.FC = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const renderSlide = ({ item }: { item: Slide }) => {
        return (
          <View style={styles.slideContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        );
      };

  return (
    <View style={styles.container}>
      <Carousel
        data={slides}
        renderItem={renderSlide}
        sliderWidth={300}
        itemWidth={250}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={slides.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotStyle={styles.paginationInactiveDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  )
}

export default Test

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      slideContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        borderRadius: 8,
        padding: 16,
        marginHorizontal: 8,
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        color: 'white',
      },
      description: {
        fontSize: 16,
        color: 'white',
      },
      paginationContainer: {
        paddingVertical: 8,
      },
      paginationDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.92)',
      },
      paginationInactiveDot: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      },
})