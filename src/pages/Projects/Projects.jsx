import RootLayout from "@components/layouts";
import { Button } from "@consta/uikit/Button";
import { Card } from "@consta/uikit/Card";
import { Layout } from "@consta/uikit/Layout";
import { Text } from "@consta/uikit/Text";
import { Icon } from "@consta/uikit/Icon";
import { IconArrowLeft } from "@consta/icons/IconArrowLeft";
import { IconArrowRight } from "@consta/icons/IconArrowRight";

export default function Projects() {
  return (
    <>
      <Layout
        direction="column"
        style={{ margin: "24px auto", width: "1200px" }}
      >
        <Layout flex={1}>
          <a href="/uit">
            <Button
              label="Открыть"
              iconLeft={IconArrowLeft}
              size="xs"
              onlyIcon={true}
              view="ghost"
            />
          </a>
          <h3 style={{ marginLeft: "12px" }}>Тестовый проект №2</h3>
        </Layout>

        <Layout style={{ margin: "24px 0", gap: "24px" }}>
          <Card
            verticalSpace="xl"
            horizontalSpace="xl"
            form="round"
            style={{
              width: "100%",
              background: "#ecf1f4",
            }}
            border={true}
            shadow={false}
          >
            <Layout>
              <h4>Увязка</h4>
            </Layout>
            <Layout>---</Layout>
            <br />
            <Layout>
              <a href="/uit/uvaska">
                <Button label="Открыть" iconRight={IconArrowRight} size="xs" />
              </a>
            </Layout>
          </Card>
          <Card
            verticalSpace="xl"
            horizontalSpace="xl"
            form="round"
            style={{
              width: "100%",
              background: "#ecf1f4",
            }}
            border={true}
            shadow={false}
          >
            <Layout>
              <h4>3D вид</h4>
            </Layout>
            <Layout>---</Layout>
            <br />
            <Layout>
              <a href="/uit/cube3d">
                <Button label="Открыть" iconRight={IconArrowRight} size="xs" />
              </a>
            </Layout>
          </Card>
        </Layout>
        <Layout style={{ gap: "24px" }}>
          <Card
            verticalSpace="xl"
            horizontalSpace="xl"
            form="round"
            style={{
              width: "100%",
              background: "#ecf1f4",
            }}
            border={true}
            shadow={false}
          >
            <Layout>
              <h4>Интерпретация</h4>
            </Layout>
            <Layout>---</Layout>
            <br />
            <Layout>
              <a href="/uit/interpretation">
                <Button label="Открыть" iconRight={IconArrowRight} size="xs" />
              </a>
            </Layout>
          </Card>{" "}
          <Card
            verticalSpace="xl"
            horizontalSpace="xl"
            form="round"
            style={{
              width: "100%",
              background: "#ecf1f4",
            }}
            border={true}
            shadow={false}
          >
            <Layout>
              <h4>Корр-схема</h4>
            </Layout>
            <Layout>---</Layout>
            <br />
            <Layout>
              <a href="/uit/interpret">
                <Button label="Открыть" iconRight={IconArrowRight} size="xs" />
              </a>
            </Layout>
          </Card>
        </Layout>

        <Layout style={{ gap: "24px", margin: "24px 0" }}>
          <Card
            verticalSpace="xl"
            horizontalSpace="xl"
            form="round"
            style={{
              width: "100%",
              background: "#ecf1f4",
            }}
            border={true}
            shadow={false}
            status="alert"
          >
            <Layout>
              <h4>Импорт сейсмики</h4>
            </Layout>
            <Layout>---</Layout>
            <br />
            <Layout>
              <a href="#">
                <Button label="Открыть" iconRight={IconArrowRight} size="xs" />
              </a>
            </Layout>
          </Card>
          <Card
            verticalSpace="xl"
            horizontalSpace="xl"
            form="round"
            style={{
              width: "100%",
              background: "#ecf1f4",
            }}
            border={true}
            shadow={false}
            status="alert"
          >
            <Layout>
              <h4>Импорт Гео</h4>
            </Layout>
            <Layout>---</Layout>
            <br />
            <Layout>
              <a href="#">
                <Button label="Открыть" iconRight={IconArrowRight} size="xs" />
              </a>
            </Layout>
          </Card>{" "}
          <Card
            verticalSpace="xl"
            horizontalSpace="xl"
            form="round"
            style={{
              width: "100%",
              background: "#ecf1f4",
            }}
            border={true}
            shadow={false}
            status="alert"
          >
            <Layout>
              <h4>Импорт БД</h4>
            </Layout>
            <Layout>---</Layout>
            <br />
            <Layout>
              <a href="#">
                <Button label="Открыть" iconRight={IconArrowRight} size="xs" />
              </a>
            </Layout>
          </Card>
        </Layout>
      </Layout>
    </>
  );
}
