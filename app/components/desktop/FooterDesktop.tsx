export function FooterDesktop() {
  return (
    <>
      <div className="hidden bg-gradient-to-l from-[#364099] to-[#40499A] h-64 w-full absolute bottom-0 lg:flex justify-center">
        <div className="w-4/5 h-full text-white divide-y-2 divide-gray-400">
          <div className="flex mt-5 pb-5">
            {/* lorem ipsum */}
            <div className="w-5/12 tracking-wider text-sm">
              <p className="mb-3 font-bold">
                لدیما دستیار آنلاین فروش مبتنی بر سفارش
              </p>
              <p className="text-justify">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید
                سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم
                ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </p>
            </div>
            {/* list */}
            <div className="w-1/3 mr-4">
              <p className="font-bold">دسترسی سریع</p>
              <ul className="text-sm space-y-3 mt-2">
                <li>انواع چاپ</li>
                <li>هدایای تبلیغاتی</li>
                <li>طراحی تخصصی</li>
                <li>چند رسانه ای</li>
              </ul>
            </div>
            {/* call info */}
            <div className="w-1/3">
              <p className="font-bold">اطلاعات تماس</p>
              <ul className="text-sm space-y-3 mt-4 list-disc list-inside">
                <li>آدرس: تهران - پردیس - کد پستی 87878 - 1515</li>
                <li>تلفن پشتیبانی: 123456789-021</li>
              </ul>
            </div>
            <br />
          </div>
          <p className="flex gap-1">
            ارائه شده توسط لدیما -{"  "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor" // اگر رنگ می‌خواهید
              className="w-3 h-5" // برای تنظیم اندازه
            >
              {/* Font Awesome Free 6.7.1 by @fontawesome */}
              <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z" />
            </svg>{" "}
            2024
          </p>
        </div>
      </div>
    </>
  );
}
