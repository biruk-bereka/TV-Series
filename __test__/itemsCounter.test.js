import { itemsCounter } from '../src/modules/functionalities.js';

describe('Testing item counter method', () => {
  test('should return 4', () => {
    // Arrange
    const data = [
      {
        id: 25,
        name: 'Film 1',
        description: 'Desc 1',
      },
      {
        id: 20,
        name: 'Film 2',
        description: 'Desc 2',
      },
      {
        id: 250,
        name: 'Film 2',
        description: 'Desc 2',
      },
      {
        id: 210,
        name: 'Film 3',
        description: 'Desc 4',
      },
    ];

    // Act
    const nbItems = itemsCounter(data);

    // Assert
    expect(nbItems).toBe(4);
  });
  test('should return 0 if data is null', () => {
    // Arrange
    const data = null;

    // Act
    const nbItems = itemsCounter(data);

    // Assert
    expect(nbItems).toBe(0);
  });
  test('should return 0 if data is undefined', () => {
    // Arrange
    const data = null;

    // Act
    const nbItems = itemsCounter(data);

    // Assert
    expect(nbItems).toBe(0);
  });
});
