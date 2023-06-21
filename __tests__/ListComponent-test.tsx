import { List } from "../ListComponent";
/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

// Note: test renderer must be required after react-native.


  it('renderers the correct number of items using FlatList', () => {
    const data = [1, 2, 3];
    renderer(<List data={data} />);
    const items = screen.getAllByTestId('list-item');
    expect(items.length).toBe(data.length);
  });
  
it('renderers correctly', () => {
  renderer.create(<List data={[]} />);
});

it('scales the item size correctly using react-native-size-matters', () => {
    const data = [1, 2, 3];
    renderer(<List data={data} />);
    const items = screen.getAllByTestId('list-item');
    items.forEach((item: { style: { width: any; height: any; }; }) => {
      expect(item.style.width).toBeGreaterThan(0);  // Assuming scaled width is greater than 0
      expect(item.style.height).toBeGreaterThan(0); // Assuming scaled height is greater than 0
      // Add more assertions here based on your specific scaling requirements
    });
  });
  

  it('renderers empty state when data is empty', () => {
    renderer(<List data={[]} />);
    const emptyState = screen.getByText('No items found');
    expect(emptyState).toBeInTheDocument();
  });
  
it('successfully imports react-native-size-matters', () => {
    const { moderateScale } = require('react-native-size-matters');
    expect(typeof moderateScale).toBe('function');
  });

  it('correctly scales the value using moderateScale', () => {
    const { moderateScale } = require('react-native-size-matters');
    const scaledValue = moderateScale(10);
    expect(scaledValue).toBeGreaterThan(0);  // Assuming scaling results in a non-zero value
    // Add more assertions here based on your specific scaling requirements
  });
  it('correctly scales the value vertically using moderateVerticalScale', () => {
    const { moderateVerticalScale } = require('react-native-size-matters');
    const scaledValue = moderateVerticalScale(10);
    expect(scaledValue).toBeGreaterThan(0);  // Assuming scaling results in a non-zero value
    // Add more assertions here based on your specific vertical scaling requirements
  });

  it('correctly scales the value horizontally using moderateHorizontalScale', () => {
    const { moderateHorizontalScale } = require('react-native-size-matters');
    const scaledValue = moderateHorizontalScale(10);
    expect(scaledValue).toBeGreaterThan(0);  // Assuming scaling results in a non-zero value
    // Add more assertions here based on your specific horizontal scaling requirements
  });
  