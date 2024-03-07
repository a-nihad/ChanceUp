function SettingsLayout({ children, heading }) {
  return (
    <div className="flex flex-col rounded-xl border border-color_grey_light bg-white dark:border-dark_grey_light dark:bg-dark_white ">
      <header className="rounded-t-lg bg-color_primary px-4 py-2 text-base text-color_light dark:bg-dark_primary_dark dark:text-color_grey sm:px-8 sm:text-lg ">
        {heading}
      </header>
      {children}
    </div>
  );
}

export default SettingsLayout;
