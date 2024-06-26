export const HOME_KEY = "HOME";
export const ABOUT_KEY = "ABOUT";

export type PageKey = typeof HOME_KEY | typeof ABOUT_KEY;

export const pageKeys: PageKey[] = [HOME_KEY, ABOUT_KEY];

export const pageNames: { [key in PageKey]: string } = {
  [HOME_KEY]: "Work",
  [ABOUT_KEY]: "About",
};

export const pagePaths: { [key in PageKey]: string } = {
  [HOME_KEY]: "home",
  [ABOUT_KEY]: "about",
} as const;

export const worksNames = {
  CALM_THINKING_AMAZON: "Calm Thinking Amazon",
  ORGANIC_SOCIAL: "Variety of Organic Social Posts",
  PROMOTIONAL_LANDING_PAGE: "Promotional Landing Page Design",
  LITERATURE_AND_PACKAGING: "Variety of Literature and Packaging",
  MULTIVITAMIN_PRODUCT: "Multivitamin Product Design",
  TYPE_DREAMS_BRANDING: "Type Dreams Branding",
};

export type WorksKey = keyof typeof worksNames;

export const worksKeys: WorksKey[] = [
  "CALM_THINKING_AMAZON",
  "ORGANIC_SOCIAL",
  "PROMOTIONAL_LANDING_PAGE",
  "LITERATURE_AND_PACKAGING",
  "MULTIVITAMIN_PRODUCT",
  "TYPE_DREAMS_BRANDING",
];

export const worksSlideShow: {
  [key in WorksKey]: { fileExtension: string; length: number };
} = {
  CALM_THINKING_AMAZON: { fileExtension: "jpg", length: 7 },
  ORGANIC_SOCIAL: { fileExtension: "jpg", length: 7 },
  PROMOTIONAL_LANDING_PAGE: { fileExtension: "jpg", length: 2 },
  LITERATURE_AND_PACKAGING: { fileExtension: "png", length: 6 },
  MULTIVITAMIN_PRODUCT: { fileExtension: "jpg", length: 4 },
  TYPE_DREAMS_BRANDING: { fileExtension: "jpg", length: 3 },
};

export const worksBlurData: {
  [key in WorksKey]?: string;
} = {
  CALM_THINKING_AMAZON:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGPIq62ztLGx9fV//vIlg196JgMDg7iNw7dfPxgWrV8fl5xa1Nj8998/AC8DEduKjTrdAAAAAElFTkSuQmCC",
  ORGANIC_SOCIAL:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/AObz/2Wo13m44+76/wDX7P0AJW0AEV3V6fsA7/r/MIK7AFeb6vT/7GAYVVDzizoAAAAASUVORK5CYII=",
  PROMOTIONAL_LANDING_PAGE:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGNorasMjUmQkJL//uEtg5qUwIT2+rrKkj+f3zAoCzDIMDGkh7pcOLQJAC76D3RBtAtnAAAAAElFTkSuQmCC",
  LITERATURE_AND_PACKAGING:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/AO/v7t3Y2bSyt9PT1ADV19eNjpCPj5Csq6sASEtHAAwK5eXn5OTk/d4YHW4MUfsAAAAASUVORK5CYII=",
  MULTIVITAMIN_PRODUCT:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/AP3+/W5sa3h1dfr6+gCIiIcMAABrZWDi4uMAycnKUlBMhoR/9PT0qV0VtxTHIigAAAAASUVORK5CYII=",
  TYPE_DREAMS_BRANDING:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVR4nGP4Bgb/wYDBw8NDQkIiLi6ur6+P4cmTJ5cuXXoCBgAH/BodBRvQvAAAAABJRU5ErkJggg==",
};

export const accentColor = "#e3e5f3";

export const logoPath = "/images/logo.png";
