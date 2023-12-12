// React
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

// Consta/uikit components
import { Layout } from "@consta/uikit/Layout";
import { Text } from "@consta/uikit/Text";
import { Badge } from "@consta/uikit/Badge";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReflexContainer, ReflexSplitter } from "react-reflex";

// Icons
import { IconArrowLeft } from "@consta/icons/IconArrowLeft";
import { IconArrowRight } from "@consta/icons/IconArrowRight";
import { IconSlide } from "@consta/icons/IconSlide";
import { IconClose } from "@consta/icons/IconClose";
import { IconBackward } from "@consta/icons/IconBackward";

import "react-reflex/styles.css";
import "./Modal.style.scss";

import "swiper/scss";
import "swiper/scss/navigation";
import { Button } from "@consta/uikit/Button";

export default function Modal({
  title,
  defaultType,
  sameType,
  isCollapse,
  isOpen,
  getChoice,
  onClose,
  isChoiceGroup,
  choiceGroupData,
  setIsObjectModalFullHeight,
  setIsSettingsModalFullHeight,
  style,
  isSettingsModal,
  setTransform,
  settingsData,
  setCurrentSettingsData,
  currentSettingsData,
}) {
  const [isShown, setIsShown] = useState(false);
  const [fullHeight, setFullHeight] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [activeChoice, setActiveChoice] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const calculateModalWidth = `calc(${windowWidth}px - 24px)`;
  return (
    <Layout
      direction="column"
      className={`modal ${fullHeight ? "fullHeight" : ""} ${
        isCollapse ? "bg-white-modal " : ""
      } ${isOpen ? "active-modal" : "inactive-modal"}`}
      style={{
        width: `${windowWidth <= 640 ? calculateModalWidth : ""} `,
        ...style,
      }}
    >
      <Layout className="modal__header">
        <Layout style={{ alignItems: "center", gap: "4px" }}>
          {isSettingsModal && (
            <>
              {currentSettingsData && (
                <Button
                  onClick={() => {
                    setTransform(false);
                    setCurrentSettingsData(null);
                  }}
                  view="clear"
                  size="xs"
                  iconLeft={IconBackward}
                />
              )}
            </>
          )}
          <Text className="modal__header--title">{title}</Text>
        </Layout>
        <Layout style={{ alignItems: "center", gap: "4px" }}>
          {isSettingsModal && (
            <>
              {currentSettingsData && settingsData?.badge && (
                <Badge size="xs" status={settingsData.badge} label="Статус" />
              )}
            </>
          )}
          <Text className="modal__header--close" onClick={onClose}>
            <IconClose size="xs" />
          </Text>
        </Layout>
      </Layout>
      <Layout
        direction="column"
        className={`modal__content ${
          isSettingsModal ? "settings-scrollbar" : ""
        }`}
      >
        {isChoiceGroup && (
          <div className="swiper-wrapper-modal">
            <Swiper
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              onSlideChange={(swiper) => {
                setCurrentSlideIndex(swiper.activeIndex);
                setIsLastSlide(swiper.isEnd);
              }}
              modules={[Navigation]}
              spaceBetween={4}
              slidesPerView={6}
              style={{ marginBottom: "7px" }}
            >
              {choiceGroupData.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className={`modal__object-choice ${
                    index === activeChoice ? "active-choice" : ""
                  }`}
                  onClick={() => {
                    getChoice(item);
                    setActiveChoice(index);
                  }}
                >
                  {index === activeChoice ? (
                    <>{item.activeIcon}</>
                  ) : (
                    <>{item.icon}</>
                  )}
                  <Badge status="system" size="xs" label="8" />
                </SwiperSlide>
              ))}
            </Swiper>
            <div
              className="swiper-button-prev"
              style={{ display: `${currentSlideIndex === 0 ? "none" : ""}` }}
            >
              <IconArrowLeft view="ghost" />
            </div>
            <div
              className="swiper-button-next"
              style={{ display: `${isLastSlide ? "none" : ""}` }}
            >
              <IconArrowRight view="ghost" />
            </div>
          </div>
        )}
        <ReflexContainer orientation="horizontal">
          {defaultType}
          {sameType && <ReflexSplitter className="modal__resize-handle" />}
          {sameType}
        </ReflexContainer>
      </Layout>
      <Layout
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        onClick={() => {
          setFullHeight((prev) => !prev);
          if (setIsObjectModalFullHeight) {
            setIsObjectModalFullHeight((prev) => !prev);
          }
          if (setIsSettingsModalFullHeight) {
            setIsSettingsModalFullHeight((prev) => !prev);
          }
        }}
        className="modal__resizer"
      >
        {!isShown ? (
          <IconSlide view="ghost" size="xs" className="modal__resizer--icon" />
        ) : (
          <img
            src={`${
              !fullHeight
                ? "/assets/svg/arrow-top.svg"
                : "/assets/svg/arrow-bottom.svg"
            } `}
          />
        )}
      </Layout>
    </Layout>
  );
}

Modal.propTypes = {
  children: PropTypes.any,
  onClose: PropTypes.func,
  defaultType: PropTypes.element,
  sameType: PropTypes.element,
  title: PropTypes.string,
  setIsObjectModalFullHeight: PropTypes.func,
  isCollapse: PropTypes.bool,
  style: PropTypes.any,
  isOpen: PropTypes.bool,
  isChoiceGroup: PropTypes.bool,
  choiceGroupData: PropTypes.array,
  getChoice: PropTypes.func,
  setIsSettingsModalFullHeight: PropTypes.func,
  isSettingsModal: PropTypes.bool,
  setTransform: PropTypes.func,
  settingsData: PropTypes.any,
  currentSettingsData: PropTypes.any,
  setCurrentSettingsData: PropTypes.func,
};
