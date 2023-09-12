import React, { useState } from "react";
import { Col, Row } from "antd";

import useLoginForm, {
  genderOptions,
  dateOptions,
  monthOptions,
  yearOptions,
  customerGroupOptions,
  locationOptions,
  countryOptions,
} from "./hooks/useValidationForm";
import "./App.css";
function App() {
  const { handleSubmit, register, formState } = useLoginForm();

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  const handleShowForm = () => {
    setIsFormVisible(true);
  };

  return (
    <>
      {!isFormVisible && (
        <button className="show" onClick={handleShowForm}>
          Show Form
        </button>
      )}

      {isFormVisible && (
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            alert("Successfully");
          })}
        >
          <span onClick={handleCloseForm} className="close">
            X
          </span>
          <Row gutter={200}>
            <Col span={12}>
              <div className="form__item">
                <label htmlFor="name">Name</label>
                <input {...register("name")} id="name" />
                <span style={{ color: "red" }}>
                  {formState.errors.name?.message}
                </span>
              </div>
              <div className="form__item">
                <label htmlFor="phone">Phone</label>
                <input {...register("phone")} id="phone" />
                <span style={{ color: "red" }}>
                  {formState.errors.phone?.message}
                </span>
              </div>
              <div className="form__item">
                <label htmlFor="email">Email</label>
                <input type="email" {...register("email")} id="email" />
                <span style={{ color: "red" }}>
                  {formState.errors.email?.message}
                </span>
              </div>
              {/* Các trường không bắt buộc */}
              <div className="form__item">
                <label htmlFor="gender">Gender</label>
                <select {...register("gender")} id="gender">
                  <option value="">Select gender</option>
                  {genderOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <Row gutter={8}>
                <Col span={8}>
                  <div className="form__item">
                    <label>Date</label>
                    <select {...register("date")} id="date">
                      <option value="">date</option>
                      {dateOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="form__item">
                    <label>Month</label>
                    <select {...register("month")} id="month">
                      <option value="">month</option>
                      {monthOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="form__item">
                    <label>Year</label>
                    <select {...register("year")} id="year">
                      <option value="">year</option>
                      {yearOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </Col>
              </Row>

              <div className="form__item">
                <label htmlFor="customerGroup">Customer Group</label>
                <select {...register("customerGroup")} id="customerGroup">
                  <option value="">Select customer group</option>
                  {customerGroupOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </Col>
            <Col span={12}>
              <div className="form__item">
                <label htmlFor="area">Delivery area</label>
                <input type="text" {...register("area")} id="area" />
              </div>
              <div className="form__item">
                <label htmlFor="location">Location</label>
                <select {...register("location")} id="location">
                  <option value="">Select location</option>
                  {locationOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form__item">
                <label htmlFor="building">Building</label>
                <input type="text" {...register("building")} id="building" />
              </div>
              <div className="form__item">
                <label htmlFor="street">Street</label>
                <input type="text" {...register("street")} id="street" />
              </div>
              <div className="form__item">
                <label htmlFor="city">City</label>
                <input type="text" {...register("city")} id="city" />
              </div>
              <div className="form__item">
                <label htmlFor="country">Country</label>
                <select {...register("country")} id="country">
                  <option value="">Select country</option>
                  {countryOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </Col>
          </Row>
          <div className="btn">
            <button onClick={handleCloseForm} type="button" className="cancel">
              Cancel
            </button>
            <button className="save" type="submit">
              Save
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default App;
