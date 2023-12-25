import { Button } from "@consta/uikit/Button";
import { Layout } from "@consta/uikit/Layout";

import { IconEdit } from "@consta/icons/IconEdit";
import { IconTrash } from "@consta/icons/IconTrash";
import { IconDiamond } from "@consta/icons/IconDiamond";
import { IconWorldFilled } from "@consta/icons/IconWorldFilled";
import { IconDrillingPartRightFilled } from "@consta/icons/IconDrillingPartRightFilled";
import { IconDrop } from "@consta/icons/IconDrop";
import { IconDinosaur } from "@consta/icons/IconDinosaur";

export const calculationItems = [
  {
    id: 1,
    label: "3D вид - визуализация 1",
    leftIcon: IconDinosaur,
    date: "20.10.23",
  },
  {
    id: 2,
    leftIcon: IconDinosaur,
    label: "3D вид - визуализация №2",
  },
  {
    id: 3,
    leftIcon: IconDinosaur,
    label: "3D вид - визуализация №2",
  },
];

export const dataItems = [
  {
    id: 1,
    label: "Обьект 1",
    leftIcon: IconDinosaur,
    text: "Москва́ — столица России, город федерального значения, административный центр",
  },
  {
    id: 2,
    leftIcon: IconDinosaur,
    label: "Обьект 2",
    text: "Казань — lorem ipsum",
  },
  {
    id: 3,
    leftIcon: IconDinosaur,
    label: "Обьект 3",
    text: "Новосибирск — lorem ipsum, lorem ipsum",
  },
];

export const contextMenuItems = [
  {
    label: "Масштаб",
    switch: false,
  },
  {
    label: "Линейка",
    switch: false,
  },
  {
    label: "Легенда",
    switch: false,
  },
];

export const sameMenuItems = [
  {
    id: 1,
    label: "Обьект 1",
    leftIcon: IconDinosaur,
  },
  {
    id: 2,
    leftIcon: IconDinosaur,
    label: "Обьект 2",
  },
  {
    id: 3,
    leftIcon: IconDinosaur,
    label: "Обьект 3",
  },
];

export const objectMenuItems = [
  {
    id: 1,
    data: [
      {
        id: 1,
        label: "Обьект 1",
        leftIcon: IconDinosaur,
        data: [
          {
            id: 1,
            label: "Обьект 1-1",
            leftIcon: IconDinosaur,
          },
          {
            id: 2,
            leftIcon: IconDinosaur,
            label: "Обьект 1-2",
          },
          {
            id: 3,
            leftIcon: IconDinosaur,
            label: "Обьект 1-3",
          },
        ],
      },
      {
        id: 2,
        leftIcon: IconDinosaur,
        label: "Обьект 2",
        data: [
          {
            id: 1,
            label: "Обьект 2 | 1",
            leftIcon: IconDinosaur,
          },
          {
            id: 2,
            leftIcon: IconDinosaur,
            label: "Обьект 2 | 2",
          },
          {
            id: 3,
            leftIcon: IconDinosaur,
            label: "Обьект 2 | 3",
          },
        ],
      },
      {
        id: 3,
        leftIcon: IconDinosaur,
        label: "Обьект 3",
        data: [
          {
            id: 1,
            label: "Обьект 3 | 1",
            leftIcon: IconDinosaur,
          },
          {
            id: 2,
            leftIcon: IconDinosaur,
            label: "Обьект 3 | 2",
          },
          {
            id: 3,
            leftIcon: IconDinosaur,
            label: "Обьект 3 | 3",
          },
          {
            id: 4,
            leftIcon: IconDinosaur,
            label: "Обьект 3 | 4",
          },
        ],
      },
      {
        id: 4,
        leftIcon: IconDinosaur,
        label: "Обьект 4",
        data: [
          {
            id: 1,
            label: "Обьект 4 | Обьект 1",
            leftIcon: IconDinosaur,
          },
          {
            id: 2,
            leftIcon: IconDinosaur,
            label: "Обьект 4 | Обьект 2",
          },
          {
            id: 3,
            leftIcon: IconDinosaur,
            label: "Обьект 4 | Обьект 3",
          },
          {
            id: 5,
            leftIcon: IconDinosaur,
            label: "Обьект 4 | Обьект 4",
          },
        ],
      },
      {
        id: 7,
        leftIcon: IconDinosaur,
        label: "Обьект 7",
        data: [
          {
            id: 1,
            label: "Обьект 7 | Обьект 1",
            leftIcon: IconDinosaur,
          },
          {
            id: 2,
            leftIcon: IconDinosaur,
            label: "Обьект 5 | Обьект 2",
          },
          {
            id: 3,
            leftIcon: IconDinosaur,
            label: "Обьект 5 | Обьект 3",
          },
        ],
      },
      {
        id: 6,
        leftIcon: IconDinosaur,
        label: "Обьект 6",
        data: [
          {
            id: 1,
            label: "Обьект 5 | Обьект 1",
            leftIcon: IconDinosaur,
          },
          {
            id: 2,
            leftIcon: IconDinosaur,
            label: "Обьект 5 | Обьект 2",
          },
          {
            id: 3,
            leftIcon: IconDinosaur,
            label: "Обьект 5 | Обьект 3",
          },
        ],
      },
      {
        id: 5,
        leftIcon: IconDinosaur,
        label: "Обьект 5",
        data: [
          {
            id: 1,
            label: "Обьект 5 | Обьект 1",
            leftIcon: IconDinosaur,
          },
          {
            id: 2,
            leftIcon: IconDinosaur,
            label: "Обьект 5 | Обьект 2",
          },
          {
            id: 3,
            leftIcon: IconDinosaur,
            label: "Обьект 5 | Обьект 3",
          },
        ],
      },
      {
        id: 8,
        leftIcon: IconDinosaur,
        label: "Обьект 8",
        data: [
          {
            id: 1,
            label: "Обьект 8 | Обьект 1",
            leftIcon: IconDinosaur,
          },
          {
            id: 3,
            leftIcon: IconDinosaur,
            label: "Обьект 5 | Обьект 3",
          },
        ],
      },
      {
        id: 9,
        leftIcon: IconDinosaur,
        label: "Обьект 9",
        data: [
          {
            id: 1,
            label: "Обьект 9 | Обьект 1",
            leftIcon: IconDinosaur,
          },
          {
            id: 2,
            leftIcon: IconDinosaur,
            label: "Обьект 9 | Обьект 2",
          },
          {
            id: 3,
            leftIcon: IconDinosaur,
            label: "Обьект 9 | Обьект 3",
          },
          {
            id: 3,
            leftIcon: IconDinosaur,
            label: "Обьект 9 | Обьект 3",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    data: [
      {
        id: 1,
        label: "Обьект 1",
        leftIcon: IconDinosaur,
        data: [
          {
            id: 1,
            label: "Lorem 1",
            leftIcon: IconDinosaur,
          },
          {
            id: 2,
            leftIcon: IconDinosaur,
            label: "Lorem 2",
          },
          {
            id: 3,
            leftIcon: IconDinosaur,
            label: "Lorem 3",
          },
        ],
      },
      {
        id: 2,
        leftIcon: IconDinosaur,
        label: "Обьект 2",
        data: [
          {
            id: 1,
            label: "Обьект 2 | Обьект 1",
            leftIcon: IconDinosaur,
          },
          {
            id: 2,
            leftIcon: IconDinosaur,
            label: "Обьект 2 | Обьект 2",
          },
          {
            id: 3,
            leftIcon: IconDinosaur,
            label: "Обьект 2 | Обьект 3",
          },
        ],
      },
      {
        id: 3,
        leftIcon: IconDinosaur,
        label: "Обьект 3",
        data: [
          {
            id: 1,
            label: "Обьект 3 | Обьект 1",
            leftIcon: IconDinosaur,
          },
          {
            id: 2,
            leftIcon: IconDinosaur,
            label: "Обьект 3 | Обьект 2",
          },
          {
            id: 3,
            leftIcon: IconDinosaur,
            label: "Обьект 3 | Обьект 3",
          },
          {
            id: 4,
            leftIcon: IconDinosaur,
            label: "Обьект 3 | Обьект 4",
          },
        ],
      },
      {
        id: 4,
        leftIcon: IconDinosaur,
        label: "Обьект 4",
        data: [
          {
            id: 1,
            label: "Обьект 4 | Обьект 1",
            leftIcon: IconDinosaur,
          },
          {
            id: 2,
            leftIcon: IconDinosaur,
            label: "Обьект 4 | Обьект 2",
          },
          {
            id: 3,
            leftIcon: IconDinosaur,
            label: "Обьект 4 | Обьект 3",
          },
          {
            id: 5,
            leftIcon: IconDinosaur,
            label: "Обьект 4 | Обьект 4",
          },
        ],
      },
      {
        id: 7,
        leftIcon: IconDinosaur,
        label: "Обьект 7",
        data: [
          {
            id: 1,
            label: "Обьект 7 | Обьект 1",
            leftIcon: IconDinosaur,
          },
          {
            id: 2,
            leftIcon: IconDinosaur,
            label: "Обьект 5 | Обьект 2",
          },
          {
            id: 3,
            leftIcon: IconDinosaur,
            label: "Обьект 5 | Обьект 3",
          },
        ],
      },
      {
        id: 6,
        leftIcon: IconDinosaur,
        label: "Обьект 6",
        data: [
          {
            id: 1,
            label: "Обьект 5 | Обьект 1",
            leftIcon: IconDinosaur,
          },
          {
            id: 2,
            leftIcon: IconDinosaur,
            label: "Обьект 5 | Обьект 2",
          },
          {
            id: 3,
            leftIcon: IconDinosaur,
            label: "Обьект 5 | Обьект 3",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    data: [
      {
        id: 1,
        label: "Обьект 1",
        leftIcon: IconDinosaur,
        data: [
          {
            id: 1,
            label: "Обьект 1",
            leftIcon: IconDinosaur,
          },
          {
            id: 2,
            leftIcon: IconDinosaur,
            label: "Обьект 2",
          },
          {
            id: 3,
            leftIcon: IconDinosaur,
            label: "Обьект 3",
          },
        ],
      },
      {
        id: 2,
        leftIcon: IconDinosaur,
        label: "Обьект 2",
        data: [
          {
            id: 1,
            label: "Обьект 2 | Обьект 1",
            leftIcon: IconDinosaur,
          },
          {
            id: 2,
            leftIcon: IconDinosaur,
            label: "Обьект 2 | Обьект 2",
          },
          {
            id: 3,
            leftIcon: IconDinosaur,
            label: "Обьект 2 | Обьект 3",
          },
        ],
      },
      {
        id: 3,
        leftIcon: IconDinosaur,
        label: "Обьект 3",
        data: [
          {
            id: 1,
            label: "Обьект 3 | Обьект 1",
            leftIcon: IconDinosaur,
          },
          {
            id: 2,
            leftIcon: IconDinosaur,
            label: "Обьект 3 | Обьект 2",
          },
          {
            id: 3,
            leftIcon: IconDinosaur,
            label: "Обьект 3 | Обьект 3",
          },
          {
            id: 4,
            leftIcon: IconDinosaur,
            label: "Обьект 3 | Обьект 4",
          },
        ],
      },
      {
        id: 4,
        leftIcon: IconDinosaur,
        label: "Обьект 4",
        data: [
          {
            id: 1,
            label: "Обьект 4 | Обьект 1",
            leftIcon: IconDinosaur,
          },
          {
            id: 2,
            leftIcon: IconDinosaur,
            label: "Обьект 4 | Обьект 2",
          },
          {
            id: 3,
            leftIcon: IconDinosaur,
            label: "Обьект 4 | Обьект 3",
          },
          {
            id: 5,
            leftIcon: IconDinosaur,
            label: "Обьект 4 | Обьект 4",
          },
        ],
      },
      {
        id: 7,
        leftIcon: IconDinosaur,
        label: "Обьект 7",
        data: [
          {
            id: 1,
            label: "Обьект 7 | Обьект 1",
            leftIcon: IconDinosaur,
          },
          {
            id: 2,
            leftIcon: IconDinosaur,
            label: "Обьект 5 | Обьект 2",
          },
          {
            id: 3,
            leftIcon: IconDinosaur,
            label: "Обьект 5 | Обьект 3",
          },
        ],
      },
    ],
  },
];

export const choiceGroupData = [
  {
    dataID: 1,
    icon: <IconDiamond size="s" />,
    activeIcon: <IconDiamond size="s" view="link" />,
  },
  {
    dataID: 2,
    icon: <IconWorldFilled size="s" />,
    activeIcon: <IconWorldFilled size="s" view="link" />,
  },
  {
    dataID: 3,
    icon: <IconDrillingPartRightFilled size="s" />,
    activeIcon: <IconDrillingPartRightFilled size="s" view="link" />,
  },
  {
    dataID: 4,
    icon: <IconDrop size="s" />,
    activeIcon: <IconDrop size="s" view="link" />,
  },
  {
    dataID: 5,
    icon: <IconDinosaur size="s" />,
    activeIcon: <IconDinosaur size="s" view="link" />,
  },
  {
    dataID: 6,
    icon: <IconDiamond size="s" />,
    activeIcon: <IconDiamond size="s" view="link" />,
  },
  {
    dataID: 7,
    icon: <IconWorldFilled size="s" />,
    activeIcon: <IconWorldFilled size="s" view="link" />,
  },
  {
    dataID: 8,
    icon: <IconDrillingPartRightFilled size="s" />,
    activeIcon: <IconDrillingPartRightFilled size="s" view="link" />,
  },
  {
    dataID: 9,
    icon: <IconDrop size="s" />,
    activeIcon: <IconDrop size="s" view="link" />,
  },
  {
    dataID: 9,
    icon: <IconDinosaur size="s" />,
    activeIcon: <IconDinosaur size="s" view="link" />,
  },
  {
    dataID: 10,
    icon: <IconDiamond size="s" />,
    activeIcon: <IconDiamond size="s" view="link" />,
  },
  {
    dataID: 11,
    icon: <IconWorldFilled size="s" />,
    activeIcon: <IconWorldFilled size="s" view="link" />,
  },
];

export const ListOfDistrictsFilter = [
  {
    id: "location-filter",
    name: "Все",
    field: "location",
    filterer: (value) => value,
  },
];

export const ListOfDistrictsRows = [
  {
    id: "1",
    location: "Северное",
    year: "1982",
    type: "Открытое",
    population: "5000",
  },
  {
    id: "2",
    location: "Северное",
    year: "1982",
    type: "Открытое",
    population: "5000",
  },
  {
    id: "3",
    location: "Северное",
    year: "1982",
    type: "Открытое",
    population: "5000",
  },
  {
    id: "4",
    location: "Северное",
    year: "1982",
    type: "Открытое",
    population: "5000",
  },
  {
    id: "5",
    location: "Северное",
    year: "1982",
    type: "Открытое",
    population: "5000",
  },
  {
    id: "6",
    location: "Северное",
    year: "1982",
    type: "Открытое",
    population: "5000",
  },
  {
    id: "7",
    location: "Северное",
    year: "1982",
    type: "Открытое",
    population: "5000",
  },
  {
    id: "8",
    location: "Северное",
    year: "1982",
    type: "Открытое",
    population: "5000",
  },
  {
    id: "9",
    location: "Северное",
    year: "1982",
    type: "Открытое",
    population: "5000",
  },
];

export const ListOfDistrictsColumns = [
  {
    title: "Местоположение",
    accessor: "location",
  },
  {
    title: "Год открытия",
    accessor: "year",
  },
  {
    title: "Тип",
    accessor: "type",
  },
  {
    title: "население, МЛН.Т",
    align: "right",
    accessor: "population",
  },
  {
    title: "Действия",
    align: "right",
    renderCell: () => (
      <Layout style={{ gap: 5 }}>
        <Button
          label="Редактировать"
          iconLeft={IconEdit}
          size="xs"
          view="ghost"
        />
        <Button
          label="Удалить"
          iconLeft={IconTrash}
          onlyIcon
          size="xs"
          view="ghost"
        />
      </Layout>
    ),
  },
];

export const trimItemsMock = [
  {
    label: "Слой 1",
    id: 1,
  },
  {
    label: "Слой 2",
    id: 2,
  },
  {
    label: "Слой 3",
    id: 3,
  },
];
