"use client";
import React, { useEffect, useState } from "react";

function ModalEducation({ modal, setModal, setUserData, userData }: any) {
  const [educationData, setEducationData] = useState<any>({});
  return (
    <>
      {modal && (
        <dialog
          className="fixed  left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center cursor-pointer"
          onClick={() => setModal(false)}
        >
          <div
            className="bg-white w-1/2   p-8 "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-3xl mb-10 font-bold ">Add education</div>
            <div className="flex flex-col gap-3 ">
              <div className="flex flex-col gap-3">
                <div className="flex flex-row w-full gap-2 ">
                  <div className="w-full ">
                    <label className=" block text-sm font-medium text-black dark:text-white">
                      School
                    </label>
                    <input
                      onChange={(e) =>
                        setEducationData({
                          ...educationData,
                          school: e.target.value,
                        })
                      }
                      value={educationData?.school}
                      type="text"
                      placeholder="Ex. Boston University"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div className="w-full ">
                    <label className=" block text-sm font-medium text-black dark:text-white">
                      Degree
                    </label>
                    <input
                      onChange={(e) =>
                        setEducationData({
                          ...educationData,
                          degree: e.target.value,
                        })
                      }
                      value={educationData?.degree}
                      type="text"
                      placeholder="Ex. bachelor's"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>
                <label className=" block text-sm font-medium text-black dark:text-white">
                  Field of study
                </label>
                <input
                  onChange={(e) =>
                    setEducationData({
                      ...educationData,
                      FieldOfStudy: e.target.value,
                    })
                  }
                  value={educationData?.FieldOfStudy}
                  type="text"
                  placeholder="Ex. Sales manager"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
              <label className=" block text-sm font-medium text-black dark:text-white">
                Description
              </label>
              <textarea
                onChange={(e) =>
                  setEducationData({
                    ...educationData,
                    description: e.target.value,
                  })
                }
                value={educationData?.description}
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
            <div className="mt-4">
              <fieldset data-test-date-dropdown="start">
                <div
                  data-test-date-dropdown__dropdowns=""
                  className="flex items-center justify-between "
                >
                  <div className="flex flex-row items-center gap-2">
                    <label className="">Month of Start date</label>
                    <span data-test-date-dropdown-month="">
                      <select
                        onChange={(e) =>
                          setEducationData({
                            ...educationData,
                            monthOfStart: e.target.value,
                          })
                        }
                        value={educationData?.monthOfStart}
                        data-test-month-select=""
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="date-range-form-component-profileEditFormElement-POSITION-profilePosition-ACoAACbb370Bj9SCs9BFN3VxyjmJv1hozG86U5s-1-dateRange-start-date"
                        name="month"
                        aria-required="false"
                      >
                        <option value="">Month</option>

                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </select>
                    </span>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <label className="visually-hidden">
                      Year of Start date
                    </label>

                    <span
                      className="fb-date-dropdown__select"
                      data-test-date-dropdown-year=""
                    >
                      <select
                        onChange={(e) =>
                          setEducationData({
                            ...educationData,
                            yearOfStart: e.target.value,
                          })
                        }
                        value={educationData?.yearOfStart}
                        data-test-year-select=""
                        id="date-range-form-component-profileEditFormElement-POSITION-profilePosition-ACoAACbb370Bj9SCs9BFN3VxyjmJv1hozG86U5s-1-dateRange-start-date-year-select"
                        name="year"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        aria-required="true"
                      >
                        <option value="">Year</option>

                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                        <option value="2003">2003</option>
                        <option value="2002">2002</option>
                        <option value="2001">2001</option>
                        <option value="2000">2000</option>
                        <option value="1999">1999</option>
                        <option value="1998">1998</option>
                        <option value="1997">1997</option>
                        <option value="1996">1996</option>
                        <option value="1995">1995</option>
                        <option value="1994">1994</option>
                        <option value="1993">1993</option>
                        <option value="1992">1992</option>
                        <option value="1991">1991</option>
                        <option value="1990">1990</option>
                        <option value="1989">1989</option>
                        <option value="1988">1988</option>
                        <option value="1987">1987</option>
                        <option value="1986">1986</option>
                        <option value="1985">1985</option>
                        <option value="1984">1984</option>
                        <option value="1983">1983</option>
                        <option value="1982">1982</option>
                        <option value="1981">1981</option>
                        <option value="1980">1980</option>
                        <option value="1979">1979</option>
                        <option value="1978">1978</option>
                        <option value="1977">1977</option>
                        <option value="1976">1976</option>
                        <option value="1975">1975</option>
                        <option value="1974">1974</option>
                        <option value="1973">1973</option>
                        <option value="1972">1972</option>
                        <option value="1971">1971</option>
                        <option value="1970">1970</option>
                        <option value="1969">1969</option>
                        <option value="1968">1968</option>
                        <option value="1967">1967</option>
                        <option value="1966">1966</option>
                        <option value="1965">1965</option>
                        <option value="1964">1964</option>
                        <option value="1963">1963</option>
                        <option value="1962">1962</option>
                        <option value="1961">1961</option>
                        <option value="1960">1960</option>
                        <option value="1959">1959</option>
                        <option value="1958">1958</option>
                        <option value="1957">1957</option>
                        <option value="1956">1956</option>
                        <option value="1955">1955</option>
                        <option value="1954">1954</option>
                        <option value="1953">1953</option>
                        <option value="1952">1952</option>
                        <option value="1951">1951</option>
                        <option value="1950">1950</option>
                        <option value="1949">1949</option>
                        <option value="1948">1948</option>
                        <option value="1947">1947</option>
                        <option value="1946">1946</option>
                        <option value="1945">1945</option>
                        <option value="1944">1944</option>
                        <option value="1943">1943</option>
                        <option value="1942">1942</option>
                        <option value="1941">1941</option>
                        <option value="1940">1940</option>
                        <option value="1939">1939</option>
                        <option value="1938">1938</option>
                        <option value="1937">1937</option>
                        <option value="1936">1936</option>
                        <option value="1935">1935</option>
                        <option value="1934">1934</option>
                        <option value="1933">1933</option>
                        <option value="1932">1932</option>
                        <option value="1931">1931</option>
                        <option value="1930">1930</option>
                        <option value="1929">1929</option>
                        <option value="1928">1928</option>
                        <option value="1927">1927</option>
                        <option value="1926">1926</option>
                        <option value="1925">1925</option>
                        <option value="1924">1924</option>
                      </select>
                    </span>
                  </div>
                </div>
              </fieldset>
              <fieldset data-test-date-dropdown="start" className="mt-3">
                <div
                  data-test-date-dropdown__dropdowns=""
                  className="flex items-center justify-between  "
                >
                  <div className="flex flex-row items-center gap-4">
                    <label className="">Month of End date</label>
                    <span data-test-date-dropdown-month="">
                      <select
                        onChange={(e) =>
                          setEducationData({
                            ...educationData,
                            monthOfEnd: e.target.value,
                          })
                        }
                        value={educationData?.monthOfEnd}
                        data-test-month-select=""
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="date-range-form-component-profileEditFormElement-POSITION-profilePosition-ACoAACbb370Bj9SCs9BFN3VxyjmJv1hozG86U5s-1-dateRange-start-date"
                        name="month"
                        aria-required="false"
                      >
                        <option value="">Month</option>

                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </select>
                    </span>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <label className="visually-hidden">Year of End date</label>

                    <span
                      className="fb-date-dropdown__select"
                      data-test-date-dropdown-year=""
                    >
                      <select
                        onChange={(e) =>
                          setEducationData({
                            ...educationData,
                            yearOfEnd: e.target.value,
                          })
                        }
                        value={educationData?.yearOfEnd}
                        data-test-year-select=""
                        id="date-range-form-component-profileEditFormElement-POSITION-profilePosition-ACoAACbb370Bj9SCs9BFN3VxyjmJv1hozG86U5s-1-dateRange-start-date-year-select"
                        name="year"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        aria-required="true"
                      >
                        <option value="">Year</option>

                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                        <option value="2003">2003</option>
                        <option value="2002">2002</option>
                        <option value="2001">2001</option>
                        <option value="2000">2000</option>
                        <option value="1999">1999</option>
                        <option value="1998">1998</option>
                        <option value="1997">1997</option>
                        <option value="1996">1996</option>
                        <option value="1995">1995</option>
                        <option value="1994">1994</option>
                        <option value="1993">1993</option>
                        <option value="1992">1992</option>
                        <option value="1991">1991</option>
                        <option value="1990">1990</option>
                        <option value="1989">1989</option>
                        <option value="1988">1988</option>
                        <option value="1987">1987</option>
                        <option value="1986">1986</option>
                        <option value="1985">1985</option>
                        <option value="1984">1984</option>
                        <option value="1983">1983</option>
                        <option value="1982">1982</option>
                        <option value="1981">1981</option>
                        <option value="1980">1980</option>
                        <option value="1979">1979</option>
                        <option value="1978">1978</option>
                        <option value="1977">1977</option>
                        <option value="1976">1976</option>
                        <option value="1975">1975</option>
                        <option value="1974">1974</option>
                        <option value="1973">1973</option>
                        <option value="1972">1972</option>
                        <option value="1971">1971</option>
                        <option value="1970">1970</option>
                        <option value="1969">1969</option>
                        <option value="1968">1968</option>
                        <option value="1967">1967</option>
                        <option value="1966">1966</option>
                        <option value="1965">1965</option>
                        <option value="1964">1964</option>
                        <option value="1963">1963</option>
                        <option value="1962">1962</option>
                        <option value="1961">1961</option>
                        <option value="1960">1960</option>
                        <option value="1959">1959</option>
                        <option value="1958">1958</option>
                        <option value="1957">1957</option>
                        <option value="1956">1956</option>
                        <option value="1955">1955</option>
                        <option value="1954">1954</option>
                        <option value="1953">1953</option>
                        <option value="1952">1952</option>
                        <option value="1951">1951</option>
                        <option value="1950">1950</option>
                        <option value="1949">1949</option>
                        <option value="1948">1948</option>
                        <option value="1947">1947</option>
                        <option value="1946">1946</option>
                        <option value="1945">1945</option>
                        <option value="1944">1944</option>
                        <option value="1943">1943</option>
                        <option value="1942">1942</option>
                        <option value="1941">1941</option>
                        <option value="1940">1940</option>
                        <option value="1939">1939</option>
                        <option value="1938">1938</option>
                        <option value="1937">1937</option>
                        <option value="1936">1936</option>
                        <option value="1935">1935</option>
                        <option value="1934">1934</option>
                        <option value="1933">1933</option>
                        <option value="1932">1932</option>
                        <option value="1931">1931</option>
                        <option value="1930">1930</option>
                        <option value="1929">1929</option>
                        <option value="1928">1928</option>
                        <option value="1927">1927</option>
                        <option value="1926">1926</option>
                        <option value="1925">1925</option>
                        <option value="1924">1924</option>
                      </select>
                    </span>
                  </div>
                </div>
              </fieldset>
              <button
                onClick={() => {
                  console.log(educationData);
                  let educationArray = userData.educationDataArray || []; // get the array of company data
                  educationArray.push(educationData);
                  setUserData({
                    ...userData,
                    educationDataArray: educationArray,
                  });
                  setModal(false);
                }}
                aria-label="signup with email and password"
                className="inline-flex items-center gap-2.5 mt-3 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
              >
                Save
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}

export default ModalEducation;