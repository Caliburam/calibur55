"use client";

import { useEffect, useState } from "react";

import { getUser, saveUser, KaizenUser } from "@/lib/storage";

export function useUser() {
  const [user, setUser] = useState<KaizenUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = getUser();

    setUser(storedUser);
    setLoading(false);
  }, []);

  function updateUser(updatedUser: KaizenUser) {
    saveUser(updatedUser);
    setUser(updatedUser);
  }

  function reloadUser() {
    setUser(getUser());
  }

  return {
    user,
    loading,
    updateUser,
    reloadUser,
  };
}