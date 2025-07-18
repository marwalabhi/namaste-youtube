import {
  SolarUserCircleOutline,
  SolarHamburgerMenuOutline,
  SolarMagniferLinear,
  BitcoinIconsCrossOutline,
} from "../../assets/icons/SolarIcons";
import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../utils/slices/appSlice";
import { useState, useEffect } from "react";
import { YT_SEARCH_SUGGEST_API } from "../../utils/constants";
import { cacheResults } from "../../utils/slices/searchSlice";
import { Link, useNavigate, useLocation } from "react-router";
import ButtonList from "../Body/MainContainer/ButtonList/ButtonList";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isWatchPage = location.pathname.includes("/watch");
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [searchFor, setSearchFor] = useState("");

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    //API call

    // make an api call after every key press but if the diff b/w
    // 2 api calls is < 200ms
    // decline the API call
    if (!searchQuery) return;

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   * dry run
   * - if i press r
   *
   * - render the component
   * - useEffect();
   * - start timer => make an api call after 200 ms   register a timer in memory of browser of 200ms & js will continue its work
   *
   * - even before 200ms i pressed another key stroke
   * - ra
   * - it triggers the reconciliation process again, when it triggers reconciliation algo it has to clear things up, cleanup function will be called
   * - this fn is called when the component is unmounted
   * - destroy the previous timer
   * - re-render the component
   * - useEffect()
   * - start timer - make api call after 200 ms
   */

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(
        `/results?search_query=${encodeURIComponent(searchQuery.trim())}`,
      );
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    navigate(`/results?search_query=${encodeURIComponent(suggestion)}`);
    setShowSuggestions(false);
    setSearchQuery(suggestion);
  };

  const getSearchSuggestions = async () => {
    try {
      const res = await fetch(YT_SEARCH_SUGGEST_API + searchQuery);
      const data = await res.json();
      setSuggestions(data[1] || []);
      //update cache
      dispatch(
        cacheResults({
          [searchQuery]: data[1],
        }),
      );
    } catch (err) {
      console.error("Failed to fetch suggestions", err);
    }
  };

  const toggelMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <header className="font-roboto fixed inset-x-0 top-0 z-30 bg-white/85 px-4 py-2 backdrop-blur-xl backdrop-saturate-150">
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="cursor-pointer rounded-full p-2 hover:bg-gray-100 focus:outline-none"
              onClick={toggelMenuHandler}
            >
              <SolarHamburgerMenuOutline fontSize={28} />
            </button>
            <Link to={"/"}>
              <img
                alt="logo"
                src={logo}
                className="h-16 w-auto object-contain"
              />
            </Link>
          </div>
          <div className="relative max-w-xl flex-1">
            <form className="mx-6 flex w-full" onSubmit={handleSearch}>
              <input
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
                type="text"
                placeholder="Search"
                className="flex-1 rounded-l-full border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                autoComplete="off"
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setShowSuggestions(false)}
              />
              {searchQuery && (
                <button
                  type="button"
                  className="absolute top-1.5 right-10 rounded-full hover:bg-gray-100 focus:outline-none"
                  onClick={() => setSearchQuery("")}
                  tabIndex={-1}
                >
                  <BitcoinIconsCrossOutline fontSize={32} />
                </button>
              )}
              <button
                type="submit"
                className="cursor-pointer rounded-r-full border border-l-0 border-gray-300 bg-gray-100/50 px-5 py-2 hover:bg-gray-200"
              >
                <SolarMagniferLinear />
              </button>
            </form>
            {showSuggestions && suggestions.length > 0 && (
              <ul className="absolute right-0 left-0 z-50 mx-7 mt-1 overflow-y-auto rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
                {suggestions.map((s, i) => (
                  <li key={s + i}>
                    <button
                      className="flex w-full items-center gap-2 rounded-xl px-4 py-2 hover:bg-gray-100"
                      onMouseDown={() => handleSuggestionClick(s)}
                    >
                      <SolarMagniferLinear className="text-gray-500" />
                      <span className="font-normal">{s}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <button className="cursor-pointer rounded-full p-2 hover:bg-gray-100 focus:outline-none">
              <SolarUserCircleOutline fontSize={32} />
            </button>
          </div>
        </div>
        <div
          className={`z-10 ${isMenuOpen ? "max3xl:ml-[19vw] max-2xl:ml-[18vw] 2xl:ml-[13vw]" : ""}`}
        >
          {!isWatchPage && <ButtonList />}
        </div>
      </div>
    </header>
  );
};

export default Header;
