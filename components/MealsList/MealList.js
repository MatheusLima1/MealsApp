import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import MealItem from './MealItem';

function MealList ({items}) {
    
    function renderMealItem(itemData) {
        const item = itemData.item;
        const mealProps = {
          id: item.id,
          title: item.title,
          imageUrl: item.imageUrl,
          duration: item.duration,
          affordability: item.affordability,
          complexity: item.complexity,
        };
        return <MealItem {...mealProps} />;
      }
    
    
      return (
        <View style={styles.container}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
          />
        </View>
      );
    }

export default MealList

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });
  
