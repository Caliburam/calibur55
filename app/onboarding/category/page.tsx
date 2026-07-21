"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { updateCategories } from "@/lib/storage";
import OnboardingCard from "@/components/ui/OnboardingCard";
import CategoryCard from "@/components/ui/CategoryCard";
import PrimaryButton from "@/components/ui/PrimaryButton";

import { categories } from "@/data/categories";

export default function CategoryPage() {
  const router = useRouter();

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showAll, setShowAll] = useState(false);

  const visibleCategories = showAll
    ? categories
    : categories.slice(0, 8);

  function toggleCategory(id: string) {
    // اگر انتخاب شده بود، حذفش کن
    if (selectedCategories.includes(id)) {
      setSelectedCategories(
        selectedCategories.filter(
          (categoryId) => categoryId !== id
        )
      );
      return;
    }

    // بیشتر از 4 تا اجازه نده
    if (selectedCategories.length >= 4) return;

    // اضافه کن
    setSelectedCategories([
      ...selectedCategories,
      id,
    ]);
  }

  return (
    <main className="min-h-screen bg-[#070B1A] flex items-center justify-center px-6 py-16">
      <OnboardingCard
        currentStep={3}
        totalSteps={3}
        title={
          <>
            Choose your
            <br />
            Path
          </>
        }
        description="Every ninja begins with one path."
      >
        <div className="grid grid-cols-2 gap-4">
          {visibleCategories.map((category) => {
            const isSelected =
              selectedCategories.includes(category.id);

            const isDisabled =
              !isSelected &&
              selectedCategories.length >= 4;

            return (
              <div
                key={category.id}
                className={`
                  transition-all duration-200
                  ${isDisabled ? "opacity-40 cursor-not-allowed" : ""}
                `}
              >
                <CategoryCard
                  title={category.title}
                  description={category.description}
                  icon={category.icon}
                  selected={isSelected}
                  onClick={() => {
                    if (!isDisabled) {
                      toggleCategory(category.id);
                    }
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* تعداد انتخاب */}
        <p className="mt-6 text-center text-sm text-slate-400">
          {selectedCategories.length} / 4 selected
        </p>

        {/* پیام وقتی 4 تا انتخاب شد */}
        {selectedCategories.length >= 4 && (
          <p className="mt-2 text-center text-sm text-blue-400">
            You've already picked your 4 starting paths.
          </p>
        )}

        {/* Show More */}
        {categories.length > 8 && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-sm font-semibold text-blue-400 transition hover:text-blue-300"
            >
              {showAll ? "Show Less ↑" : "Show More ↓"}
            </button>
          </div>
        )}

        <div className="mt-10">
          <PrimaryButton
            text="Finish →"
            disabled={selectedCategories.length !== 4}
            onClick={() => {
              updateCategories(selectedCategories);
              router.push("/onboarding/complete")}}
          />
        </div>
      </OnboardingCard>
    </main>
  );
}