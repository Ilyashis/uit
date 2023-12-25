// Layout Components
import RootLayout from "@components/layouts";
import { Button } from "@consta/uikit/Button";
import { Card } from "@consta/uikit/Card";
import { Layout } from "@consta/uikit/Layout";
import { Text } from "@consta/uikit/Text";
import { Icon } from "@consta/uikit/Icon";
import { IconArrowLeft } from "@consta/icons/IconArrowLeft";
import { IconArrowRight } from "@consta/icons/IconArrowRight";
import { Link } from "react-router-dom";

export default function Indexpage() {
  return (
    <>
      <RootLayout />
      <Layout
        direction="column"
        style={{ margin: "24px auto", width: "1200px" }}
      >
        <Layout flex={1}>
          <h2 style={{ marginLeft: "12px" }}>Проекты</h2>
        </Layout>
        <Layout style={{ margin: "24px 0", gap: "24px" }}>
          <Card
            verticalSpace="xl"
            horizontalSpace="xl"
            form="round"
            style={{ width: "100%" }}
          >
            <Layout>
              <h4>Тестовый проект №1</h4>
            </Layout>
            <Layout>ГПН-Хантос</Layout>
            <br />
            <Layout>
              <Link to="/projects">
                <Button label="Открыть" iconRight={IconArrowRight} size="xs" />
              </Link>
            </Layout>
          </Card>
        </Layout>
        <Layout style={{ margin: "24px 0", gap: "24px" }}>
          <Card
            verticalSpace="xl"
            horizontalSpace="xl"
            form="round"
            style={{ width: "100%" }}
          >
            <Layout>
              <h4>Тест</h4>
            </Layout>
            <Layout>ГПН-Хантос</Layout>
            <br />
            <Layout>
              <Link to="/projects">
                <Button label="Открыть" iconRight={IconArrowRight} size="xs" />
              </Link>
            </Layout>
          </Card>
        </Layout>
        <Layout style={{ margin: "24px 0", gap: "24px" }}>
          <Card
            verticalSpace="xl"
            horizontalSpace="xl"
            form="round"
            style={{ width: "100%" }}
          >
            <Layout>
              <h4>Тестовый проект №2</h4>
            </Layout>
            <Layout>ГПН-Хантос</Layout>
            <br />
            <Layout>
              <Link to="/projects">
                <Button label="Открыть" iconRight={IconArrowRight} size="xs" />
              </Link>
            </Layout>
          </Card>
        </Layout>
      </Layout>
    </>
  );
}
