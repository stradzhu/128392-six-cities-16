export const getRating = (rating: number): string => `${Math.round(rating) * 100 / 5}%`;
