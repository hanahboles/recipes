import { renderHook, waitFor } from '@testing-library/react';
import useRecipeList from '../hooks/use-recipe-list';

describe('useRecipeList hook', () => {
  test('returns initial values, then stops loading', async () => {
    const { result } = renderHook(() =>
      useRecipeList()
    );
    expect(result.current.isLoading).toEqual(true);
    expect(result.current.recipes).toEqual([]);
    expect(result.current.error).toEqual(null);

    await waitFor(() => expect(result.current.isLoading).toEqual(false));
  });
});
