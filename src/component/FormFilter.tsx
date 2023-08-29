import { Col, Input, Row } from "antd";
import { useState } from "react";

import { useNavigate } from "react-router";

export default function FormFilter({ getProduct, value }: any) {
  const [valueSearch, setValueSearch] = useState<string>(value);
  const navigate = useNavigate();

  return (
    <div>
      <Row>
        <Col>
          <Input
            value={valueSearch}
            onChange={(e) => {
              setValueSearch(e.target.value);
              navigate(`?title_like=${e.target.value}`);
              getProduct({
                title_like: e.target.value,
              });
            }}
          />
        </Col>
      </Row>
    </div>
  );
}
