// no longer using useState to manage global logged in state
// see stores/User.ts Now using pinia
// keeping this file only for useState and composable example
export const useIsLoggedIn = () => useState<boolean>("isLoggedIn", () => false);

